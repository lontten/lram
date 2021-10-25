import {Token} from "./model/Token";
import {Parser, ParserFun, Plug} from "./model/Parser";
import {InlineParserFun, InlinePlug} from "./model/InlineParser";
import {codePlug} from "./plug/dynamic/code";
import {imgPlug} from "./plug/static/img";
import {txtPlug} from "./plug/static/txt";
import {tablePlug} from "./plug/dynamic/table";
import {katexPlug} from "./plug/dynamic/katex";
import {titlePlug} from "./plug/static/title";
import {colorPlug} from "./plug/inline/color";
import {greenPlug} from "./plug/inline/green";




export class Core {
    private parserMap: Map<string, ParserFun>;
    private renderMap: Map<string, any>;
    private subParserMap: Map<string, Array<any>>;

    private inlineParserArr: Array<InlineParserFun>;
    private inlineRenderMap: Map<string, any>;


    constructor() {
        this.parserMap = new Map<string, any>()
        this.subParserMap = new Map<string, any>()
        this.renderMap = new Map<string, any>()
        this.inlineParserArr = new Array<any>()
        this.inlineRenderMap = new Map<string, any>()

        this.use(titlePlug)
        this.use(katexPlug)
        this.use(codePlug)
        this.use(tablePlug)
        this.use(txtPlug)
        this.use(imgPlug)

        this.useInline(colorPlug)
        this.useInline(greenPlug)

    }

    useInline(f: InlinePlug) {
        if (f.parser !== undefined) {
            this.inlineParserArr.push(f.parser)
        }
        f.render.map(render => {
            this.inlineRenderMap[render.code] = render.fun
        })
    }

    use(f: Plug) {
        if (f.parser !== undefined) {
            this.parserMap[f.code] = f.parser
        }
        f.render.map(render => {
            this.renderMap[render.code] = render.render
            this.subParserMap[render.code] = render.subParserType
        })
    }

    render(str: string) {
        return this.coreTran(str, new Token('init'))
    }


    private inlineCoreTran(line: string) {
        let i = 0;
        let html = '';
        while (true) {
            let flag = false;
            for (let lineP of this.inlineParserArr) {
                let ds = lineP(line);
                if (ds.match) {
                    flag = true
                    for (let token of ds.tokens) {
                        if (token.code === 's-txt') {
                            i++
                            if (i === 3) {
                                throw '100'
                            }
                            html += this.inlineCoreTran(token.data as string)
                        } else {
                            html += this.inlineRenderMap[token.code](token.data)
                        }
                    }
                    return html
                }
            }
            if (!flag) {
                html += line
                break
            }
        }
        return html
    }


    private coreRender(token: Token, context: any) {
        if (token.code === 's-txt') {
            return this.inlineCoreTran(token.data as string)
        }

        return this.renderMap[token.code](token, context, this.coreTran)
    }


    private coreTran(lineData: string, preToken: Token) {
        if (preToken.code === 's-txt') {
            return this.inlineCoreTran(lineData)
        }

        let lines = lineData.trim().split('\n');

        let html = '';

        while (lines.length > 0) {
            let flag = false;


            let parserFunCodes = Object.keys(this.parserMap);
            for (const p of parserFunCodes) {
                if (preToken.code !== 'init' && this.subParserMap[preToken.code].indexOf(p) < 0) {
                    continue
                }


                //深拷贝
                const v = JSON.parse(JSON.stringify(lines));
                let ds: Parser = this.parserMap[p](v);

                if (ds.line > 0) {
                    flag = true
                    lines.splice(0, ds.line)


                    for (let i = 0; i < ds.tokens.length; i++) {
                        let token = ds.tokens[i]
                        let tokenNav = null
                        if (i > 0) {
                            tokenNav = ds.tokens[i - 1]
                        }
                        html += this.coreRender(token, tokenNav)
                    }
                    ds.tokens.map(token => {
                        html += this.coreRender(token, null)
                    })
                    break
                }
            }
            if (!flag) {
                let string = lines[0];
                if (string.substr(0, 2) !== '//') {
                    html += this.inlineCoreTran(string)
                }
                lines.shift()
            }
        }
        return html
    }


}
export const helloWorld = () => {
    return 'Howdy!'
}

import {Parser, ParserFun, Plug, RenderFun} from "./model/Parser";
import {InlineParserFun, InlinePlug, InlineRenderFun} from "./model/InlineParser";
import {codePlug} from "./plug/dynamic/code";
import {imgPlug} from "./plug/dynamic/img";
import {txtPlug} from "./plug/static/txt";
import {tablePlug} from "./plug/dynamic/table";
import {katexPlug} from "./plug/dynamic/katex";
import {colorPlug} from "./plug/inline/color";
import {greenPlug} from "./plug/inline/green";
import {titlePlug} from "./plug/static/title";
import {IToken, Token} from "./model/token/token";
import {ImgGroupDto} from "./model/token/imgToken";
import {listPlug} from "./plug/dynamic/list";


let parserMap = new Map<string, ParserFun>()
let subParserMap = new Map<string, Array<string>>()
let renderMap = new Map<string, RenderFun>()

let inlineParserArr = new Array<InlineParserFun>()
let inlineRenderMap = new Map<string, InlineRenderFun>()


let imgTagMap = new Map<string, ImgGroupDto>()
let aliasMap = new Map<string, string>()
console.log(imgTagMap)
console.log(aliasMap)


export class Lram {
    constructor() {
        this.use(titlePlug)
        this.use(katexPlug)
        this.use(codePlug)
        this.use(tablePlug)
        this.use(txtPlug)
        this.use(imgPlug)
        this.use(listPlug)

        this.useInline(colorPlug)
        this.useInline(greenPlug)

    }

    useInline(f: InlinePlug) {
        if (f.parser !== undefined) {
            inlineParserArr.push(f.parser)
        }
        f.render.map(render => {
            inlineRenderMap[render.code] = render.render
        })
    }

    use(f: Plug) {
        if (f.parser !== undefined) {
            parserMap[f.code] = f.parser
        }
        f.render.map(render => {
            renderMap[render.code] = render.render
            subParserMap[render.code] = render.subParserType
        })
    }

    render(str: string) {
        return coreTran(str, new Token('init') as IToken)
    }


}


function inlineCoreTran(line: string) {
    let i = 0;
    let html = '';
    while (true) {
        let flag = false;
        for (let lineP of inlineParserArr) {
            let ds = lineP(line);
            if (ds.match) {
                flag = true
                for (let token of ds.tokens) {
                    if (token.code === 's-txt') {
                        i++
                        if (i === 3) {
                            throw '100'
                        }
                        html += inlineCoreTran(token.data as string)
                    } else {
                        html += inlineRenderMap[token.code](token.data)
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


function coreRender(token: IToken, context: any) {
    if (token.code === 's-txt') {
        return inlineCoreTran(token.data as string)
    }

    return renderMap[token.code](token, context, coreTran)
}


function coreTran(lineData: string, preToken: IToken) {
    if (preToken.code === 's-txt') {
        return inlineCoreTran(lineData)
    }

    let lines = lineData.trim().split('\n');

    let html = '';

    while (lines.length > 0) {
        let flag = false;


        let parserFunCodes = Object.keys(parserMap);
        for (const p of parserFunCodes) {
            if (preToken.code !== 'init' && subParserMap[preToken.code].indexOf(p) < 0) {
                continue
            }


            //深拷贝
            const v = JSON.parse(JSON.stringify(lines));
            let ds: Parser = parserMap[p](v);

            if (ds.line > 0) {
                flag = true
                lines.splice(0, ds.line)

                ds.tokens.map(token => {
                    html += coreRender(token, null)
                })
                break
            }
        }
        if (!flag) {
            let string = lines[0];
            if (string.substr(0, 2) !== '//') {
                html += inlineCoreTran(string)
            }
            lines.shift()
        }
    }
    return html
}


export const helloWorld = () => {
    return 'Howdy!'
}
export const lram = new Lram()
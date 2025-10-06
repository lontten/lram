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
import {BaseToken, Token} from "./model/token/token";
import {listPlug} from "./plug/dynamic/list";

// 优化1: 统一管理所有map与array为类属性，避免全局变量污染
export class Lram {
    private parserMap = new Map<string, ParserFun>();
    private subParserMap = new Map<string, Array<string>>();
    private renderMap = new Map<string, RenderFun>();

    private inlineParserArr: InlineParserFun[] = [];
    private inlineRenderMap = new Map<string, InlineRenderFun>();

    // private imgTagMap = new Map<string, ImgGroupDto>();
    // private aliasMap = new Map<string, string>();

    constructor() {
        this.use(titlePlug);
        this.use(katexPlug);
        this.use(codePlug);
        this.use(tablePlug);
        this.use(txtPlug);
        this.use(imgPlug);
        this.use(listPlug);

        this.useInline(colorPlug);
        this.useInline(greenPlug);

    }

    useInline(plug: InlinePlug) {
        if (plug.parser) {
            this.inlineParserArr.push(plug.parser);
        }
        plug.render.forEach(render => {
            this.inlineRenderMap.set(render.code, render.render);
        });
    }

    use(plug: Plug) {
        if (plug.parser) {
            this.parserMap.set(plug.code, plug.parser);
        }
        plug.render.forEach(render => {
            this.renderMap.set(render.code, render.render);
            this.subParserMap.set(render.code, render.subParserType);
        });
    }

    render(str: string): string {
        return this.coreTran(str, new BaseToken('init') as Token);
    }

    private inlineCoreTran(line: string, depth = 0): string {
        // 防止无限递归
        if (depth > 10) throw new Error('Inline recursion depth exceeded');
        let html = '';
        let processed = false;

        for (const lineP of this.inlineParserArr) {
            const ds = lineP(line);
            if (ds.match) {
                processed = true;
                for (const t of ds.tokens) {
                    const token = t as BaseToken;
                    if (token.code === 's-txt') {
                        html += this.inlineCoreTran(token.data as string, depth + 1);
                    } else {
                        const render = this.inlineRenderMap.get(token.code);
                        if (!render) throw new Error(`Inline render not found for code: ${token.code}`);
                        html += render(token.data);
                    }
                }
                break; // 只处理第一个匹配的parser
            }
        }
        return processed ? html : line;
    }

    private coreRender(token: Token, context: any): string {
        const baseToken = token as BaseToken;
        if (baseToken.code === 's-txt') {
            return this.inlineCoreTran(baseToken.data as string);
        }
        const render = this.renderMap.get(baseToken.code);
        if (!render) throw new Error(`Render not found for code: ${baseToken.code}`);
        return render(baseToken, context, this.coreTran.bind(this));
    }

    private coreTran(lineData: string, preToken: Token): string {
        if (preToken.code === 's-txt') {
            return this.inlineCoreTran(lineData);
        }
        const lines = lineData.trim().split('\n');
        let html = '';

        while (lines.length > 0) {
            let processed = false;
            // 优化2: Object.keys(parserMap) → [...this.parserMap.keys()]
            for (const p of this.parserMap.keys()) {
                if (preToken.code !== 'init') {
                    const parserTypes = this.subParserMap.get(preToken.code);
                    if (!parserTypes || !parserTypes.includes(p)) continue;
                }
                // 深拷贝
                const linesCopy: string[] = JSON.parse(JSON.stringify(lines));
                const parser = this.parserMap.get(p);
                if (!parser) continue;
                const ds: Parser = parser(linesCopy);
                if (ds.line > 0) {
                    processed = true;
                    lines.splice(0, ds.line);
                    ds.tokens.forEach(token => {
                        html += this.coreRender(token, null);
                    });
                    break;
                }
            }
            if (!processed) {
                const string = lines[0];
                if (!string.startsWith('//')) {
                    html += this.inlineCoreTran(string);
                }
                lines.shift();
            }
        }
        return `<div class="lram">${html}</div>`;
    }
}

// 工具函数和实例
export const helloWorld = () => 'Howdy!';
export const lram = new Lram();
import {Token} from "./Token";

export class InlineParser {
    constructor(match: boolean, tokens?: Array<Token>) {
        this.match = match
        if (tokens) {
            this.tokens = tokens
        } else {
            this.tokens = new Array<Token>()
        }
    }

    public match: boolean
    public tokens: Array<Token>
}


export interface InlinePlug {
    parser: InlineParserFun
    render: Array<InlinePlugRender>
}

export type InlineParserFun = (lines: string) => InlineParser
export type InlineRenderFun = (token: string, ctx: any, tran: any) => string


export interface InlinePlugRender {
    code: string
    subParserType: Array<string>//解析后的数据可被这些类型继续解析
    render: InlineRenderFun
}
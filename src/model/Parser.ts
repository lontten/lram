import {Token} from "./Token";

export class Parser {
    constructor(num: number, tokens?: Array<Token>) {
        this.line = num
        if (tokens) {
            this.tokens = tokens
        } else {
            this.tokens = new Array<Token>()
        }
    }

    public line: number
    public tokens: Array<Token>
}


export interface Plug {
    code: string
    parser: ParserFun
    render: Array<PlugRender>
}

export type ParserFun = (lines: Array<string>) => Parser


export interface PlugRender {
    code: string
    subParserType: Array<string>//解析后的数据可被这些类型继续解析
    fun: (token: Token, ctx: any, tran: any) => string
}
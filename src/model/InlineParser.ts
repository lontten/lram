import {Token, ITokenType} from "./token/token";
import {CoreTran} from "./core";


export class InlineParser {
    constructor(match: boolean) {
        this.match = match
    }

    add(t: ITokenType): InlineParser {
        if (t instanceof Array) {
            this.tokens.push(...t)
        } else {
            this.tokens.push(t as Token)
        }
        return this
    }


    set(match: boolean): InlineParser {
        this.match = match
        return this
    }


    match: boolean
    tokens: Array<Token> = new Array<Token>()
}


export interface InlinePlug {
    parser: InlineParserFun
    render: Array<InlinePlugRender>
}

export type InlineParserFun = (lines: string) => InlineParser
export type InlineRenderFun = (token: string, ctx: any, tran: CoreTran) => string


export interface InlinePlugRender {
    code: string
    subParserType: Array<string>//解析后的数据可被这些类型继续解析
    render: InlineRenderFun
}

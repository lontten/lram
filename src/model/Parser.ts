import {IToken, ITokenType} from "./token/token";
import {CoreTran} from "./core";

export class Parser {
    constructor(num: number) {
        this.line = num
    }

    add(t: ITokenType): Parser {
        if (t instanceof Array) {
            this.tokens.push(...t)
        } else {
            this.tokens.push(t as IToken)
        }
        return this
    }


    set(num: number): Parser {
        this.line = num
        return this
    }


    public line: number
    public tokens: Array<IToken> = new Array<IToken>()
}


export interface Plug {
    code: string
    parser?: ParserFun
    render: Array<PlugRender>
}

export type ParserFun = (lines: Array<string>) => Parser
export type RenderFun = (token: IToken, ctx: any, tran: CoreTran) => string


export interface PlugRender {
    code: string
    subParserType: Array<string>//解析后的数据可被这些类型继续解析
    render: RenderFun
}

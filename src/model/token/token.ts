import {QuoteToken} from "./quoteToken";
import {ImgToken} from "./imgToken";
import {TableToken} from "./tableToken";

export class Token {
    constructor(code: string) {
        this.code = code
    }

    public code: string
    public data: Map<string, any> | string = new Map<string, any>()
}

export type IToken = Token & TableToken & ImgToken & QuoteToken
export type ITokenType = Token | TableToken | ImgToken | QuoteToken | Array<IToken>

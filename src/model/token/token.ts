export class Token {
    constructor(code: string) {
        this.code = code
    }

    code: string
}


export class BaseToken extends Token {
    data: string = ""
    typ: number|string = 0
}


export type ITokenType = Token | Array<Token>

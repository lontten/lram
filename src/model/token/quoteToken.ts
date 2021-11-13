import {Token} from "./token";




export class QuoteToken extends Token {
    data: QuoteDto[]=[]
}


export class QuoteDto  {
    typ:number=0
    data: string = ''
}

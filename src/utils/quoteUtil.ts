import {Parser} from "../model/Parser";
import {QuoteToken} from "../model/token/quoteToken";
import {CoreTran} from "../model/core";

const quoteRender = (token: QuoteToken, _ctx: any, _tran: CoreTran) => {
    console.log(token);

    return ""
}

const quoteParser = (lines: string[]): Parser => {
    console.log(lines);
    let parser = new Parser(0);
    let lineNum = 0

    return parser.set(lineNum)
}

export {
    quoteParser, quoteRender
}
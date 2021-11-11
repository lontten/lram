import {Parser, Plug} from "../../model/Parser";
import {CoreTran} from "../../model/core";
import {QuoteToken} from "../../model/token/quoteToken";

export const quoteParser = (lines :string[]) => {
    console.log(lines);
    let parser = new Parser(0);
    let lineNum = 0

    return parser.set(lineNum)
}

export const quoteRender = (token :QuoteToken,_ctx :any,_tran:CoreTran) => {
    console.log(token);

    return ""
}


export const quotePlug: Plug = {
    code: "s-quote", //引用
    parser: quoteParser,
    render: [
        {
            code: "s-quote",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (token, ctx, tran) {
                return quoteRender(token as QuoteToken, ctx, tran)
            },
        }
    ]

};


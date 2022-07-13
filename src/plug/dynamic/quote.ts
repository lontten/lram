import {Plug} from "../../model/Parser";
import {QuoteToken} from "../../model/token/quoteToken";
import {quoteParser, quoteRender} from "../../utils/quoteUtil";

/**
 *  > jdsfklaf
 *  > ajfklaf
 *  >> ajsdlkajflf
 *  >>> afjkdslajf
 *  >> jalkdjfaklf
 *  >>> jflajdfl
 *  >> djfka
 *
 *  >=info
 *  > jaslkdfjalf
 *  > afjdlakjf
 *  >> jsadlkjfal
 *  >=info
 *  >>> ajdlkjaf
 *  > asjflsadf
 *
 *
 *  # ajfklajdf
 */

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


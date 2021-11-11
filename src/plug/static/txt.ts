import {Plug} from "../../model/Parser";
import {CoreTran} from "../../model/core";
import {BaseToken, Token} from "../../model/token/token";

export const txtPlug: Plug = {
    code:'',
    render: [
        {
            code: "s-txt",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: (t: Token, _ctx: any, tran: CoreTran) => {
                let token = t as BaseToken;
                return tran(token.data, token)
            },
        }
    ]

};


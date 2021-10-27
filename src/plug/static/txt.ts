import {Plug} from "../../model/Parser";
import {CoreTran} from "../../model/core";
import {IToken, Token} from "../../model/token/token";

export const txtPlug: Plug = {
    code:'',
    render: [
        {
            code: "s-txt",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: (t: IToken, _ctx: any, tran: CoreTran) => {
                let token = t as Token;
                return tran(token.data as string, token)
            },
        }
    ]

};


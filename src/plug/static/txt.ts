import {Plug} from "../../model/Parser";
import {CoreTran} from "../../model/core";
import {IToken} from "../../model/Token";

export const txtPlug: Plug = {
    code:'',
    render: [
        {
            code: "s-txt",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: (token: IToken, _ctx: any, tran: CoreTran) => {
                return tran(token.data as string, token)
            },
        }
    ]

};


import {Parser, Plug} from "../../model/Parser";
import {CoreTran} from "../../model/core";
import {Token} from "../../model/Token";

export const txtPlug: Plug = {
    code:'',
    parser:()=>new Parser(0),
    render: [
        {
            code: "s-txt",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: (token: Token, ctx: any, tran: CoreTran) => {
                console.log(ctx)
                return tran(token.data as string, token)
            },
        }
    ]

};


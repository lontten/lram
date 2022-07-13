/**
 *
 *  - jskdajf
 *  - jsadfkafl
 *  - jsadfkdaj
 *
 *  1. ajklda
 *  1. ajsdfk
 *  1. jfdklajf
 *  1. jdfklajf
 *  1. jasdfklajfl
 *  1. ljafklaf
 *
 *  a. ajfdklaf
 *  a. ajfkladjf
 *  a. ajdsfklajfdklafsad
 *  a. djfklajfalf
 *
 *
 */
import {Plug} from "../../model/Parser";
import {ListToken} from "../../model/token/listToken";
import {listParser, listRender} from "../../utils/listUtil";

export const listPlug: Plug = {
    code: "s-list",
    parser: listParser,
    render: [
        {
            code: "s-list",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: (t, _ctx, _tran) => {
                let token = t as ListToken;
                return listRender(token.data, _ctx, _tran)
            },
        }
    ]

};

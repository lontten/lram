import {Plug} from "../../model/Parser";
import {TableToken} from "../../model/token/tableToken";
import {tableParser, tableRender} from "../../utils/tableUtil";

export const tablePlug: Plug = {
    code: "s-table",
    parser: tableParser,
    render: [
        {
            code: "s-table",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (t, ctx, tran) {
                return tableRender(t as TableToken, ctx, tran)
            },
        }
    ]

};

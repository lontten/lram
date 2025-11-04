import {Parser, type Plug} from "../../model/Parser";
import {BaseToken} from "../../model/token/token";

export const titlePlug: Plug = {
    code: "s-title",
    parser: function (lines) {
        let parser = new Parser(0);

        let line = lines[0];
        let reg = /^#+ /
        if (!reg.test(line)) {
            return parser;
        }

        reg = /(^#+ )([\w\W]*)/
        let exec = reg.exec(line);
        if (exec == null) {
            return parser;
        }

        let head = exec[1];
        let data = exec[2];


        let token = new BaseToken('s-title');
        token.typ = head.length - 1
        token.data = data


        parser.add(token)
        return parser.set(1)

    },
    render: [
        {
            code: "s-title",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (t, _ctx, tran) {
                let token=t as BaseToken
                let n = token.typ
                const head = "<h" + n + '>';
                const end = "</h" + n + '>';

                return head + tran(token.data, token) + end
            },
        }
    ]

};


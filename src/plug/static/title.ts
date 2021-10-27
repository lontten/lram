import {Parser, Plug} from "../../model/Parser";
import {Token} from "../../model/Token";

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


        let token = new Token('s-title');
        token.data["num"] = head.length - 1
        token.data['data'] = data


        parser.add(token)
        return parser.set(1)

    },
    render: [
        {
            code: "s-title",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (token, _ctx, tran) {
                let n = token.data["num"];
                const head = "<h" + n + '>';
                const end = "</h" + n + '>';

                return head + tran(token.data['data'], token) + end
            },
        }
    ]

};


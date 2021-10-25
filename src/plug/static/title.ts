import {Parser, Plug} from "../../model/Parser";
import {Token} from "../../model/Token";

export const titlePlug: Plug = {
    code: "s-title",
    parser: function (lines) {
        let tokens = new Array<Token>();

        let line = lines[0];
        let reg = /^#+ /
        if (!reg.test(line)) {
            return new Parser(0);
        }

        reg = /(^#+ )([\w\W]*)/
        let exec = reg.exec(line);
        if (exec == null) {
            return new Parser(0);
        }

        let head = exec[1];
        let data = exec[2];


        let token = new Token('s-title');
        token.data["num"] = head.length - 1
        token.data['data'] = data
        tokens.push(token)

        return new Parser(1, tokens);

    },
    render: [
        {
            code: "s-title",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, ctx, tran) {
                console.log(ctx)
                let n = token.data["num"];
                const head = "<h" + n + '>';
                const end = "</h" + n + '>';

                return head + tran(token.data['data'], token) + end
            },
        }
    ]

};


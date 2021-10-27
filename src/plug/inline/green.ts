import {Token} from "../../model/token/token";
import {InlineParser, InlinePlug} from "../../model/InlineParser";

export const greenPlug: InlinePlug = {
    parser: function (line) {
        let parser = new InlineParser(false);

        let split = line.split('#g ');
        if (split.length === 1) {
            return parser
        }

        let token = new Token("s-txt")
        token.data = split[0]
        parser.add(token)

        split.splice(0, 1)
        split.map(k => {
            let token = new Token("l-green")
            token.data = k
            parser.add(token)
        })

        return parser.set(true)

    },
    render: [
        {
            code: "l-green",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (line) {
                return '<span style="color: green">' + line + '</span>'
            },
        }
    ]

};


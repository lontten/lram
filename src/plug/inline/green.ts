import {Token} from "../../model/Token";
import {InlineParser, InlinePlug} from "../../model/InlineParser";

export const greenPlug: InlinePlug = {
    parser: function (line) {
        let tokens = new Array<Token>()

        let split = line.split('#g ');
        if (split.length === 1) {
            return new InlineParser(false)
        }

        let token = new Token("s-txt")
        token.data = split[0]
        tokens.push(token)

        split.splice(0, 1)
        split.map(k => {
            let token = new Token("l-green")
            token.data = k
            tokens.push(token)
        })
        return new InlineParser(true, tokens)

    },
    render: [
        {
            code: "l-green",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (line) {
                return '<span style="color: green">' + line + '</span>'
            },
        }
    ]

};


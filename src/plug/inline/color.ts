import {Token} from "../../model/Token";
import {InlineParser, InlinePlug} from "../../model/InlineParser";

export const colorPlug: InlinePlug = {
    parser: function (line) {
        let tokens = new Array<Token>()

        let split = line.split('#c ');
        if (split.length === 1) {
            return new InlineParser(false)
        }

        let token = new Token("s-txt")
        token.data = split[0]
        tokens.push(token)

        split.splice(0, 1)
        split.map(k => {
            let token = new Token("l-color")
            let indexOf = k.indexOf('  ');
            if (indexOf < 0) {
                token.data = k
                tokens.push(token)
            }
            if (indexOf > 0) {
                let token1 = new Token("l-color")
                token1.data = k.substring(0, indexOf)
                tokens.push(token1)

                let token2 = new Token("s-txt")
                token2.data = k.substring(indexOf, k.length)
                tokens.push(token2)
            }

        })
        return new InlineParser(true, tokens)

    },
    render: [
        {
            code: "l-color",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (line) {
                return '<span style="color: red">' + line + '</span>'
            },
        }
    ]

};


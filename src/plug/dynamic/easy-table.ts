import {Token} from "../../model/Token";
import {Parser, Plug} from "../../model/Parser";

export const easyTablePlug: Plug = {
    code: "s-easy-table",
    parser: function (lines) {
        let tokens = new Array<Token>()
        let lineNum = 0

        let line = lines[0]
        if (line !== "$$") {
            return new Parser(0)
        }

        let token = new Token('s-katex')
        token.data = ''
        while (true) {
            lines.shift()
            lineNum++


            if (lines.length === 0) {
                break
            }
            const line = lines[0]

            if (line.trim() === "$$") {
                lineNum++
                break
            }
            token.data += line;
        }

        tokens.push(token)

        return new Parser(lineNum, tokens)

    },
    render: [
        {
            code: "s-easy-table",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, ctx, tran) {
                let html = katex.renderToString(token.data, {
                    displayMode: true,
                    throwOnError: false
                })
                return html
            },
        }
    ]

};


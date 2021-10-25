import {Parser, Plug} from "../../model/Parser";
import {ComToken, Token} from "../../model/Token";
import {CoreTran} from "../../model/core";
import {renderToString} from "katex";

export const katexPlug: Plug = {
    code: "s-katex",
    parser: function (lines) {
        let tokens = new Array<Token>()
        let lineNum = 0

        let line = lines[0]
        if (line !== "$$") {
            return new Parser(0)
        }

        let token = new ComToken('s-katex')
        token.data = ''
        while (true) {
            lines.shift()
            lineNum++
            if (lines.length === 0) {
                return new Parser(0)
            }

            const line = lines[0]

            if (line.trim() === "$$") {
                lineNum++
                break
            }
            token.data += line;
        }

        tokens.push(token as Token)

        return new Parser(lineNum, tokens)

    },
    render: [
        {
            code: "s-katex",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (token, ctx: any, tran: CoreTran) {
                console.log(ctx)
                console.log(tran)

                let html = ''
                html = renderToString(token.data as string, {
                    displayMode: true,
                    throwOnError: false
                })
                return html
            },
        }
    ]

};


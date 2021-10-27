import {Token} from "../../model/Token";
import {Parser, Plug} from "../../model/Parser";
import {renderToString} from "katex";

export const quotePlug: Plug = {
    code: "s-quote", //引用
    parser: function (lines) {
        let parser = new Parser(0);
        let lineNum = 0

        let line = lines[0]
        if (line !== "$$") {
            return parser
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

        parser.add(token)

        return parser.set(lineNum)
    },
    render: [
        {
            code: "s-quote",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (token, ctx, tran) {
                console.log(ctx)
                console.log(tran)

                let html = renderToString(token.data as string, {
                    displayMode: true,
                    throwOnError: false
                })
                return html
            },
        }
    ]

};


import {Parser, Plug} from "../../model/Parser";
import {CoreTran} from "../../model/core";
import {renderToString} from "katex";
import {BaseToken} from "../../model/token/token";

export const katexPlug: Plug = {
    code: "s-katex",
    parser: function (lines) {
        let parser = new Parser(0);
        let lineNum = 0

        let line = lines[0]
        if (line !== "$$") {
            return parser
        }

        let token = new BaseToken('s-katex')
        while (true) {
            lines.shift()
            lineNum++
            if (lines.length === 0) {
                return parser
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
            code: "s-katex",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (t, _ctx: any, _tran: CoreTran) {
                let token = t as BaseToken

                let html = ''
                html = renderToString(token.data, {
                    displayMode: true,
                    throwOnError: false
                })
                return html
            },
        }
    ]

};


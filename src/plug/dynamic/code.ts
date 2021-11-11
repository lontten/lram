import {Parser, Plug} from "../../model/Parser";
import hljs from 'highlight.js';
import {BaseToken} from "../../model/token/token";

export const codePlug: Plug = {
    code: 's-code',
    parser: function (lines) {
        let parser = new Parser(0);
        let lineNum = 0

        let line = lines[0]


        let reg = /^```/
        if (!reg.test(line)) {
            return parser
        }

        reg = /^```\s*([\w\W]*?)\s*$/
        let exec = reg.exec(line);
        if (exec == null) {
            return parser
        }

        const token = new BaseToken('s-code')
        token.typ = exec[1]

        while (true) {
            lines.shift()
            lineNum++

            if (lines.length === 0) {
                return parser
            }
            const line = lines[0]

            if (line === "```") {
                lineNum++
                break
            }
            token.data['data'] += line + '\n';
        }

        parser.add(token)

        return parser.set(lineNum)

    },
    render: [
        {
            code: "s-code",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (t, _ctx, _tran) {
                let token=t as BaseToken
                const highlightedCode = hljs.highlightAuto(token.data).value
                return '<pre><code class="hljs">' + highlightedCode + '</code></pre>'
            },
        }
    ]

};


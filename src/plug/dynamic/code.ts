import {Parser, Plug} from "../../model/Parser";
import {ComToken, Token} from "../../model/Token";
import {highlightAuto} from "highlightjs";

export const codePlug: Plug = {
    code: 's-code',
    parser: function (lines) {
        let tokens = new Array<Token>()
        let lineNum = 0

        let line = lines[0]


        let reg = /^```/
        if (!reg.test(line)) {
            return new Parser(0)
        }

        reg = /^```\s*([\w\W]*?)\s*$/
        let exec = reg.exec(line);
        if (exec == null) {
            return new Parser(0)
        }

        const token = new ComToken('s-code')
        token.data["type"] = exec[1]
        token.data['data'] = ''
        while (true) {
            lines.shift()
            lineNum++

            if (lines.length === 0) {
                return new Parser(0)
            }
            const line = lines[0]

            if (line === "```") {
                lineNum++
                break
            }
            token.data['data'] += line + '\n';
        }

        tokens.push(token as Token)

        return new Parser(lineNum, tokens)

    },
    render: [
        {
            code: "s-code",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (token, ctx, tran) {
                console.log(ctx)
                console.log(tran)

                const highlightedCode = highlightAuto(token.data['data']).value
                return '<pre><code class="hljs">' + highlightedCode + '</code></pre>'
            },
        }
    ]

};


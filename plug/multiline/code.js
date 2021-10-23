const hljs = require("highlight.js");
const plug = {
    code: 's-code',
    parser: function (lines) {
        const arr = [];
        let lineNum = 0

        let line = lines[0]


        let reg = /^```/
        if (!reg.test(line)) {
            return {
                line: 0
            }
        }

        reg = /^```\s*([\w\W]*?)\s*$/
        let exec = reg.exec(line);

        const token = {};
        token.code = 's-code'
        token.data = {}
        token.data["type"] = exec[1]
        token.data['data']=''
        while (true) {
            lines.shift()
            lineNum++

            if (lines.length === 0) {
                return {
                    line: 0
                }
            }
            const line = lines[0]

            if (line === "```") {
                lineNum++
                break
            }
            token.data['data'] += line + '\n';
        }

        arr.push(token)

        return {
            line: lineNum,
            tokens: arr
        }

    },
    render: [
        {
            code: "s-code",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {
                const highlightedCode = hljs.highlightAuto(token.data['data']).value
                return '<pre><code class="hljs">' + highlightedCode + '</code></pre>'
            },
        }
    ]

};

module.exports = plug

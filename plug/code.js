const hljs = require("highlight.js");
const plug = {
    code: 'code',
    parser: function (source) {
        let lines = source;
        const arr = [];
        let lineNum = 0

        let line = lines[0]


        let reg = /^\s*```/
        if (!reg.test(line)) {
            console.log('code false :: ' + line)
            return {
                line: 0
            }
        }

        reg = /^\s*```\s*([\w\W]*?)\s*$/
        let exec = reg.exec(line);

        const token = {};
        token.code = 'code'
        token.data = {}
        token.data["type"] = exec[1]
        token.data['data']=''
        while (true) {
            lines.shift()
            lineNum++

            if (lines.length === 0) {
                lines='vvvvvvv'
                console.log('code di re :: '+JSON.stringify(token))
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
            code: "code",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {

                const highlightedCode = hljs.highlightAuto(token.data['data']).value
                return '<pre><code class="hljs">' + highlightedCode + '</code></pre>'
            },
        }
    ]

};

module.exports = plug

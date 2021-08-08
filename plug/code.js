const hljs = require("highlight.js");
const plug = {
    parser: function (lines) {
        const arr = [];
        let lineNum = 0

        let line = lines[0]
        console.log('code false :: ' + line)


        let reg = /^\s*```/
        if (!reg.test(line)) {
            return {
                line: 0
            }
        }

        reg = /^\s*```\s*([\w\W]*?)\s*$/
        let exec = reg.exec(line);

        const token = {};
        token.code = 'code'
        token.data={}
        token.data["type"] = exec[1]
        while (true) {
            lines.shift()
            lineNum++

            if (lines.length === 0) {
                break
            }
            const line = lines[0]

            if (line.trim() === "```") {
                break;
            }
            token.data['data'] += line + '\n';
        }

        console.log('code token:: ' + token)
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
                return '<pre><code class="hljs">'+highlightedCode+'</code></pre>'
            },
        }
    ]

};

module.exports = plug

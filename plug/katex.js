const katex = require('katex');
const plug = {
    code: "katex",
    parser: function (lines) {
        const arr = [];
        let lineNum=0

        let line = lines[0]
        if (line !== "$$") {
            console.log('katex p false ')
            return {
                line: 0
            }
        }

        let token = {}
        token.code = 'katex'
        token.data=''
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

        arr.push(token)

        return {
            line: lineNum,
            tokens: arr
        }

    },
    render: [
        {
            code: "katex",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {
                html= katex.renderToString(token.data, {
                    displayMode: true,
                    throwOnError: false
                })
                console.log('html::'+html)
                return html
            },
        }
    ]

};

module.exports = plug

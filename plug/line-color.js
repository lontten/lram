const plug = {
    code: 'line-color',
    parser: function (lines) {
        const arr = [];

        let line = lines[0];
        let split = line.split('#c ');

        let token = {}
        token.code = "txt"
        token.data = split[0]
        arr.push(token)

        split.splice(0, 1)
        split.map(k => {
            let token = {}
            token.code = "color"
            token.data = k
            arr.push(token)
        })
        return {
            line: 1,
            tokens: arr
        }

    },
    render: [
        {
            code: "line-color",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {
                return '<span style="color: red">' + token.data + '</span>'
            },
        }
    ]

};

module.exports = plug

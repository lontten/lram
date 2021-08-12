const plug = {
    parser: function (line) {
        const arr = [];

        let split = line.split('#c ');
        if (split.length===1){
            return {
                match:false
            }
        }

        let token = {}
        token.code = "s-txt"
        token.data = split[0]
        arr.push(token)

        split.splice(0, 1)
        split.map(k => {
            let token = {}
            token.code = "l-color"
            token.data = k
            arr.push(token)
        })
        return {
            match: true,
            tokens: arr
        }

    },
    render: [
        {
            code: "l-color",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (line) {
                return '<span style="color: red">' + line + '</span>'
            },
        }
    ]

};

module.exports = plug

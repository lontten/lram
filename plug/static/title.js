const plug = {
    code: "s-title",
    parser: function (lines) {
        const arr = [];

        let line = lines[0];
        let reg = /^#+ /
        if (!reg.test(line)) {
            return {
                line: 0
            }
        }

        reg = /(^#+ )([\w\W]*)/
        let exec = reg.exec(line);

        let head = exec[1];
        let data = exec[2];


        let token = {}
        token.code = "s-title"
        token.data={}
        token.data["num"] = head.length - 1
        token.data['data'] = data
        arr.push(token)

        return {
            line: 1,
            tokens: arr
        }

    },
    render: [
        {
            code: "s-title",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {
                let n = token.data["num"];
                const head = "<h" + n + '>';
                const end = "</h" + n + '>';

                return head + tran(token.data['data'], token) + end
            },
        }
    ]

};

module.exports = plug

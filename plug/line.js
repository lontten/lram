const plug = {
    code: "html-h",
    parser: function (lines) {
        const arr = [];

        let line = lines[0];
        let reg = /\s*#+ /
        if (!reg.test(line)) {
            console.log('html-h false::'+line)
            return {
                line: 0
            }
        }

        console.log('html-h true::'+line)
        reg = /(\s*#+ )([\w\W]*)/
        let exec = reg.exec(line);
        console.log('exec::'+exec)

        let head = exec[1];
        let data = exec[2];


        let token = {}
        token.code = "html-h"
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
            code: "html-h",
            subParserType: ["line-style",'color'],//解析后的数据可被这些类型继续解析
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

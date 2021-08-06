
var plug = {
    code: "line-k",
    inLineType: ["se"],//解析后的数据可被这些类型继续解析
    parser: function (lines) {

        let line = lines[0];
        let s = line.substr(0,2);
        console.log(s)

        if (true) {
            return {
                line: 0
            }
        }
        const arr = [];


        reg = /(\s*#+ )([\w\W]*)/
        let exec = reg.exec(line);

        let head = exec[1];
        let data = exec[2];

        let token = new Token();
        token.code = "html-h"
        token.map["num"] = head.length - 1
        token.setData(data)
        arr.push(token)


        return {
            line: 1,
            tokens: arr
        }
    },
    render: [
        {
            code: "html-h",
            fun: function (token) {

                let n = token.map["num"];
                const head = "<h" + n + '>';
                const end = "</h" + n + '>';

                if (token.Tokens.length > 0) {
                    return {
                        head: head,
                        data: "",
                        end: end
                    }
                }

                return {
                    head: head,
                    data: token.Tokens,
                    end: end
                }

            },
        }
    ]

}

module.exports = plug

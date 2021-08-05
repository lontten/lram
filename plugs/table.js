import {Brif} from '../index'

var talbe = {
    code: "html-h",
    inLineType: ["code", "tag-h"],//解析后的数据可被这些类型继续解析
    parser: function (lines) {

        let line = lines[0];
        let reg = /\s*#+ /
        if (!reg.test(line)) {
            return {
                line: 0
            }
        }
        var arr = []


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
            code: "table",
            fun: function (token) {
                let brif = new Brif();

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
                    data: node.data,
                    end: end
                }


                var arr = []
                return arr
            },
        }
    ]

}

module.exports = talbe

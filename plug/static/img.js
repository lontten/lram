const katex = require('katex');
const plug = {
    code: "s-img",
    parser: function (lines) {
        const arr = [];

        if (lines.length < 2) {
            console.log('len < 2');
            return {
                line: 0
            }
        }

        let line = lines[0]
        if (line !== "@img") {
            console.log('!= @img');
            return {
                line: 0
            }
        }


        let line2 = lines[1];
        if (line2.length<5){
            console.log('img data len < 5');
            return {
                line: 0
            }
        }

        let line3 = lines[1];
        if (line3.trim()===""){
            console.log('kong line err');
            return {
                line: 0
            }
        }

        let token = {}
        token.code = 's-img'
        token.data = {}
        token.data["data"] = line2



        arr.push(token)

        return {
            line: 3,
            tokens: arr
        }

    },
    render: [
        {
            code: "s-img",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {
                let html = `<img src="${token.data["data"]}" alt="">`

                return html
            },
        }
    ]

};

module.exports = plug

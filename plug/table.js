const plug = {
    code: "s-table",
    parser: function (lines) {
        const arr = [];
        let lineNum = 0

        let line = lines[0]

        let reg = /^\|([\s\S]*\|)+[\s\S]*$/;
        if (!reg.test(line)) {
            return {
                line: 0
            }
        }


        //匹配table 第一行 成功
        reg = /[\s\S]*?\|/g
        let oneLineHeadDatalist = line.split('|');
        oneLineHeadDatalist = oneLineHeadDatalist.slice(1, oneLineHeadDatalist.length - 1)

        const tableColNum = oneLineHeadDatalist.length

        lines.shift()
        lineNum++
        let twoLine = lines[0]

        reg = /^\|((\s*-\s*|\s*-:\s*|\s*:-\s*)\|)+\s*$/

        //第二行匹配table，失败
        if (!reg.test(twoLine)) {
            //无法匹配table模式
            return {
                line: 0
            }
        }


        //第二行匹配table成功，进入table模式
        let twoLineHeadDatalist = twoLine.split('|');
        twoLineHeadDatalist = twoLineHeadDatalist.slice(1, twoLineHeadDatalist.length - 1)
        const colType = [];
        twoLineHeadDatalist.forEach(value => {
            switch (value.trim) {
                case '-':
                    colType.push(1);
                    break
                case ':-':
                    colType.push(2);
                    break
                case '-:':
                    colType.push(3);
                    break
                default:
                    return {
                        line: 0
                    }
            }
        })


        if (twoLineHeadDatalist.length !== tableColNum) {
            return {
                line: 0
            }
        }

        let token = {}
        token.code = 's-table'
        token.colNum = tableColNum
        token.colType = colType
        token.rowNum = 1
        token.data = []
        token.data[0] = oneLineHeadDatalist

        while (true) {
            lines.shift()
            if (lineNum === 7) {
                throw '3'
            }

            lineNum++
            if (lines.length === 0) {
                break
            }

            line = lines[0]
            if (line.trim() === '') {
                break
            }

            //table 3
            reg = /^\|([\s\S]*\|)+\s*$/
            //第一行匹配table
            if (!reg.test(line)) {
                break
            }

            token.data[token.rowNum] = []
            let list = line.split('|');
            list = list.slice(1, list.length - 1)

            for (let i = 0; i < token.colNum; i++) {
                token.data[token.rowNum][i] = list[i]
            }
            token.rowNum++

        }

        arr.push(token)
        return {
            line: lineNum,
            tokens: arr
        }

    },
    render: [
        {
            code: "s-table",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {
                let html = ''
                console.log("----------------------------------------------")
                console.log(JSON.stringify(token))
                let colNum = token.colNum;
                let rowNum = token.rowNum;

                html += '<thead>'
                html += '<tr>'
                html += renderRow(token.data[0], colNum)
                html += '</tr>'
                html += '</thead>'

                html += '<tbody>'
                for (let i = 1; i < rowNum; i++) {
                    html += '<tr>'
                    html += renderRow(token.data[i], colNum)
                    html += '</tr>'
                }
                html += '</tbody>'


                function renderRow(rows, len) {
                    console.log('ren row :: ' + JSON.stringify(rows) + len)
                    let html = '';

                    for (let k = 0; k < len; k++) {
                        html += '<td>' + rows[k] + '</td>'

                    }
                    return html
                }

                return '<table>' + html + '</table>'
            },
        }
    ]

};

module.exports = plug

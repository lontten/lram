import {Parser} from "../model/Parser";
import {ListDto, ListToken, ListType, typType} from "../model/token/listToken";


const listParser = (lines: string[]): Parser => {
    let parser = new Parser(0);
    let lineNum = 0

    let line = lines[0]

    let reg = /^(-|1\.|01\.|a\.|A\.|i\.|I\.|cn\.|al\.)\s+(\S+)$/
    let exec = reg.exec(line);

    if (exec == null) {
        return parser;
    }
    let typ = genTyp(exec[1]);
    let data = exec[2];


    let token = new ListToken('s-list');
    token.set(typ)
    token.add(data)


    while (true) {
        lines.shift()
        lineNum++

        if (lines.length == 0) {
            parser.add(token)
            return parser.set(lineNum)
        }
        let line = lines[0]


        //end
        if (line.trim() == '') {
            parser.add(token)
            return parser.set(lineNum + 1)
        }


        let reg = /^(-|1\.|01\.|a\.|A\.|i\.|I\.|cn\.|al\.)\s+(\S+)$/
        let exec = reg.exec(line);
        if (exec != null) {
            let data = exec[2];
            token.add(data)
            continue
        }


        let list = token.data.list;
        list[list.length - 1] += line
    }

}


const listRender = (token: ListDto, _ctx: any, _tran: any) => {
    let typ = token.typ;
    let list = token.list;


    let html = ''
    let h = ''
    if (typ == '-') {
        html = `<ul>`
        h = `</ul>`
    } else {
        let typCla = genStyle(typ)

        html = `<ol style="list-style-type: ${typCla}">`
        h = '</ol>'
    }


    for (let item of list) {
        if (item instanceof ListDto) {
            let len = html.length;
            html = html.substring(0, len - 5) + listRender(item, _ctx, _tran) + html.substr(len - 5, 5)
        } else {
            html += `<li>${item}</li>`
        }
    }
    html += h
    return html

}

const genStyle = (typ: ListType) => {
    let style = ''
    switch (typ) {
        case "1":
            style = 'decimal';
            break;

        case "01":
            style = 'decimal-leading-zero';
            break;

        case "i":
            style = 'lower-roman';
            break;

        case "I":
            style = 'upper-roman';
            break;

        case "a":
            style = 'lower-alpha';
            break;

        case "A":
            style = 'upper-alpha';
            break;


        case "al":
            style = 'lower-greek';
            break;


        case "cn":
            style = 'cjk-ideographic';
            break;

        default:
            style = 'decimal'
    }
    return style
}

const genTyp = (str: string): typType => {
    return str.replace('.', '') as typType
}

export {
    listParser, listRender
}
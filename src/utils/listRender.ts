import {ListDto, ListType} from "../model/token/listToken";

export const ListRenderFun = (token: ListDto, _ctx: any, _tran: any) => {
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
            html=html.substring(0,len-5)+ListRenderFun(item, _ctx, _tran)+html.substr(len-5,5)
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
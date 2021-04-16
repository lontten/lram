let LmNode = require("../model/LmNode");
let line = require("../pattern/line/lineRender");
let code = require("../pattern/code/codeRender");
let text = require("../pattern/text/textRender");
let katex = require("../pattern/math/katexRender");
let fontFormat = require("../pattern/fontFormat/fontFormatRender");
module.exports = function doToHtml(node) {
    html = ''
    toHtmlCore(node.NodeList)
    return html
}

let html = '';

function toHtmlCore(nodeList) {
    nodeList.forEach(node => {
        if (node.code === "html-h") {
            let b = line(node);

            let head = b.head;
            let end = b.end;
            let data = b.data;

            if (head !== undefined) {
                html += head
            }
            if (data !== '') {
                html += data
            } else {
                toHtmlCore(node.NodeList)
            }
            if (end !== undefined) {
                html += end
            }
        }
        if (node.code === "code") {
            let b = code(node);

            let head = b.head;
            let end = b.end;
            let data = b.data;

            if (head !== undefined) {
                html += head
            }
            if (data !== '') {
                html += data
            } else {
                toHtmlCore(node.NodeList)
            }
            if (end !== undefined) {
                html += end
            }
        }
        if (node.code === "katex") {
            let b = katex(node);

            let head = b.head;
            let end = b.end;
            let data = b.data;

            if (head !== undefined) {
                html += head
            }
            if (data !== '') {
                html += data
            } else {
                toHtmlCore(node.NodeList)
            }
            if (end !== undefined) {
                html += end
            }
        }


         if (node.code === "fontFormat") {
            let b = fontFormat(node);

            let head = b.head;
            let end = b.end;
            let data = b.data;

            if (head !== undefined) {
                html += head
            }
            if (data !== '') {
                html += data
            } else {
                toHtmlCore(node.NodeList)
            }
            if (end !== undefined) {
                html += end
            }
        }














        if (node.code === "text") {
            let b = text(node);

            let head = b.head;
            let end = b.end;
            let data = b.data;

            if (head !== undefined) {
                html += head
            }
            if (data !== '') {
                html += data
            } else {
                toHtmlCore(node.NodeList)
            }
            if (end !== undefined) {
                html += end
            }
        }




    })
}


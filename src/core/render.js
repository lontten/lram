let LmNode = require("../model/LmNode");
let line = require("../render/lineRender");
let code = require("../render/codeRender");
let text = require("../render/textRender");
module.exports = function doToHtml(node) {
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
            if (data !== undefined) {
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
            if (data !== undefined) {
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
            if (data !== undefined) {
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


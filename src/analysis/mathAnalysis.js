let LmNode = require("../model/LmNode");

module.exports = function analysis(node) {
    switch (node.code) {
        case "html-h":
        case "text":
        case "code":
        case "math":
            return false
    }

    if (node.StrList.length === 0) {
        return false
    }

    let line = node.StrList[0].trim();
    if (line !== "$$") {
        return false;
    }

    let lmNode = new LmNode();
    lmNode.type = 'code'
    while (true) {
        node.StrList.shift()

        const tmp = node.StrList[0].trim();
        if (tmp == null) {
            break;
        }

        if (tmp.trim() === "$$") {
            break;
        }
        lmNode.data += tmp;
        lmNode.StrList.push(tmp)
    }

    node.NodeList.push(lmNode)

    //结束处理
    node.StrList.shift()
    return true;
}

let LmNode = require("../../model/LmNode");

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
    console.log('math ana')
    console.log(node)

    let line = node.StrList[0].trim();
    if (line !== "$$") {
        return false;
    }

    let lmNode = new LmNode();
    lmNode.type = 'code'
    while (true) {
        node.StrList.shift()

        if (node.StrList.length === 0) {
            break
        }
        const line = node.StrList[0].trim();

        if (line.trim() === "$$") {
            break;
        }
        lmNode.data += line;
        lmNode.StrList.push(line)
    }

    node.NodeList.push(lmNode)

    //结束处理
    node.StrList.shift()
    return true;
}

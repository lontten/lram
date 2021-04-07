let LmNode = require("../model/LmNode");

module.exports = function analysis(node) {
    let line = node.StrList[0].trim();
    if (line !== "$$") {
        return 0;
    }

    let lmNode = new LmNode();
    lmNode.type = 'code'
    while (true) {
        node.StrList.shift()

        const tmpstr = node.StrList[0].trim();
        if (tmpstr == null) {
            break;
        }

        if (tmpstr.trim() === "$$") {
            break;
        }
        lmNode.data += tmpstr;
        lmNode.StrList.push(tmpstr)
    }

    node.NodeList.push(lmNode)

    //结束处理
    node.StrList.shift()
    return true;
}

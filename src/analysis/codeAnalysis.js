let LmNode = require("../model/LmNode");

module.exports = function analysis(node) {
    let line = node.StrList[0].trim();
    let reg = /^\s*```/
    if (!reg.test(line)) {
        return false;
    }

    let lmNode = new LmNode();

    //匹配code成功
    reg = /^\s*```\s*([\w\W]*?)\s*$/
    let exec = reg.exec(line);


    lmNode.type = exec[1]
    while (true) {
        node.StrList.shift()

        const tmpstr = node.StrList[0].trim();
        if (tmpstr == null) {
            break;
        }

        if (tmpstr.trim() === "```") {
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

const LmNode = require("../../model/LmNode")
/**
 *
 *      # h1
 *      ## h2
 *      ### h3
 *      #### h4
 *      ##### h5
 *      ###### h6
 *
 * @param node
 * @returns {boolean}
 */
module.exports = function parser(node) {
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

    console.log('line ana')
    console.log(node)

    let line = node.StrList[0];
    let reg = /\s*#+ /
    if (!reg.test(line)) {
        return false;
    }

    reg = /(\s*#+ )([\w\W]*)/
    let exec = reg.exec(line);

    let head = exec[1];
    let data = exec[2];

    let lmNode = new LmNode();
    lmNode.code = "html-h"
    lmNode.map["num"] = head.length - 1
    lmNode.setData(data)


    //结束处理
    node.NodeList.push(lmNode)
    node.StrList.shift()
    return true;
}


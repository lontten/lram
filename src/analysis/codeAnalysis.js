let LmNode = require("../model/LmNode");
/**
 *
 *      ```java
 *      public void hello(){
 *
 *      }
 *      ```
 *
 *
 * @param node
 * @returns {boolean}
 */
module.exports = function analysis(node) {
    switch (node.code) {
        case "text":
        case "code":
        case "math":
            return false
    }

    if (node.StrList.length === 0) {
        return false
    }


    console.log("code ana")
    console.log(node)
    let line = node.StrList[0].trim();
    let reg = /^\s*```/
    if (!reg.test(line)) {
        return false;
    }

    let lmNode = new LmNode();

    //匹配code成功
    reg = /^\s*```\s*([\w\W]*?)\s*$/
    let exec = reg.exec(line);


    lmNode.code='code'
    lmNode.map["type"] = exec[1]
    while (true) {
        node.StrList.shift()

        const line = node.StrList[0].trim();
        if (line === undefined) {
            break;
        }

        if (line.trim() === "```") {
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

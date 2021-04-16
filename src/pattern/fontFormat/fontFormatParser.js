let LmNode = require("../../model/LmNode");
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
module.exports = function parser(node) {
    switch (node.code) {
        case "code":
        case "math":
            return false
    }



    if (node.StrList.length === 0) {
        return false
    }


    console.log("font format p")
    console.log(node)
    let line = node.StrList[0]
    let reg = /\S+\s*?\S+/
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

        if (node.StrList.length === 0) {
            break
        }
        const line = node.StrList[0]
        console.log("line==============================================")
        console.log(line)

        if (line.trim() === "```") {
            break;
        }
        lmNode.data = lmNode.data+ line+'\n';
        lmNode.StrList.push(line)

        console.log("line==============================================")
        console.log(lmNode.data)

    }


    node.NodeList.push(lmNode)

    //结束处理
    node.StrList.shift()

    return true;
}

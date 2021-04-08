let LmNode = require("../model/LmNode");

module.exports= function analysis (node) {
    if (node.code==='code'){
        node.StrList=[]
        return
    }
    let lmNode = {
        code:"text",
        data:node.StrList[0]
    }
    node.StrList.shift()
    //结束处理
    node.NodeList.push(lmNode)
}

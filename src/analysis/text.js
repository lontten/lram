let LmNode = require("../model/LmNode");

module.exports= function analysis (node) {
    if (node.StrList.length===0){
        return
    }
    let data = '';
    node.StrList.forEach(value => {
        data+=value
    })
    node.StrList=[]

    let lmNode = new LmNode();
    lmNode.code = "text"
    lmNode.data=data
    lmNode.StrList=[]

    //结束处理
    node.NodeList.push(lmNode)
}

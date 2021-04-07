let MdNode = require("../model/LmNode");

module.exports= function analysis (v) {
    if (v.StrList.length===0){
        return -2
    }
    let tmp = v.StrList[v.StrList.length - 1].trim();


    let mdNode = new MdNode();
    mdNode.hasNode = true
    mdNode.code = "html-k"
    mdNode.data = tmp


    //结束处理
    v.NodeList.push(mdNode)
    v.StrList.pop()

    console.log("------------")
    console.log(v)

    return 1;
}

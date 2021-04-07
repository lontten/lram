let MdNode = require("../model/LmNode");
module.exports= function doToHtml (node) {
    var html=''
    for (let node in v) {

    }
    return ""
}

var html=''

function toHtmlCore(nodeList) {
    nodeList.forEach(node => {

    })

    if (v.code==='html'){
        nodeList=v.NodeList
    }else {
        nodeList=v
    }

    nodeList = analysis.doTextAnalysis(node, analysisFunList);
    nodeList.forEach(node => {
        if (node.NodeList.length>0){
            toHtmlCore(node.NodeList)
        }
    })
}


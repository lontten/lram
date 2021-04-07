let LmNode = require("./src/model/LmNode");
let analysis = require("./src/core/doTextAnalysis");
let toHtml = require("./src/core/doToHtml");
let line = require("./src/analysis/lineAnalysis");
let kk = require("./src/analysis/kk");

const aFunList = [];
aFunList[0] = line
aFunList[1] = kk



function analysisTextCore(node) {
    console.log(node)
    let nodeList = analysis(node, aFunList);
    nodeList.forEach(value => {
        if (value.hasNode){
            analysisTextCore(value)
        }
    })
}


module.exports.toHtml = function (data) {
    let node = new LmNode()

    node.hasNode=true
    node.code="html"
    node.setData(data)

    analysisTextCore(node)
    console.log('---------ssss----------')
    console.log(JSON.stringify(node))



    return toHtml.doToHtml(node)
}

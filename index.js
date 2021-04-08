let LmNode = require("./src/model/LmNode");
let analysis = require("./src/core/doTextAnalysis");
let toHtml = require("./src/core/doToHtml");
let line = require("./src/analysis/lineAnalysis");
let code = require("./src/analysis/codeAnalysis");
let math = require("./src/analysis/mathAnalysis");

const aFunList = [];
aFunList[0] = line
aFunList[1] = code
aFunList[2] = math


function analysisTextCore(node) {
    console.log("node")
    console.log(node)
    let nodeList = analysis(node, aFunList);
    console.log(nodeList)
    nodeList.forEach(value => {
        console.log("value")
        console.log(value)
        if (value.StrList.length > 0) {
            analysisTextCore(value)
        }
    })
}


module.exports.toHtml = function (data) {
    let node = new LmNode()

    node.code = "html"
    node.setData(data)

    analysisTextCore(node)
    console.log('---------ssss----------')
    console.log(JSON.stringify(node))


    return toHtml(node)
}

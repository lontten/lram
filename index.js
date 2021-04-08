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
    let nodeList = analysis(node, aFunList);
    nodeList.forEach(value => {
        if (value.code!=="text" && value.StrList.length > 0) {
            analysisTextCore(value)
        }
    })
}


module.exports.toHtml = function (data) {
    let node = new LmNode()

    node.code = "html"
    node.setData(data)

    analysisTextCore(node)
    console.log('tohtml---------------------')
    console.log(JSON.stringify(node))



    return toHtml(node)
}

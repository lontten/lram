let LmNode = require("./src/model/LmNode");
let parser = require("./src/core/parser");
let toHtml = require("./src/core/render");
let line = require("./src/pattern/line/lineParser");
let code = require("./src/pattern/code/codeParser");
let math = require("./src/pattern/math/mathParser");

const aFunList = [];
aFunList[0] = line
aFunList[1] = code
aFunList[2] = math


function parserCore(node) {
    let nodeList = parser(node, aFunList);
    nodeList.forEach(value => {
        if (value.code!=="text" && value.StrList.length > 0) {
            parserCore(value)
        }
    })
}


module.exports.render = function (data) {
    let node = new LmNode()

    node.code = "html"
    node.setData(data)

    parserCore(node)
    console.log('tohtml---------------------')
    console.log(JSON.stringify(node))



    return toHtml(node)
}

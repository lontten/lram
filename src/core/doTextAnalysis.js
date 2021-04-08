let text = require("../analysis/text");

module.exports = function doTextAnalysis(node, funList) {
    while (true) {
        let flag = false;
        for (let i = 0; i < funList.length; i++) {
            const fun = funList[i];
            //匹配fun
            if (fun(node) === true) {
                flag = true
            }
        }

        if (!flag) {
            text(node)
            return node.NodeList
        }
    }
}

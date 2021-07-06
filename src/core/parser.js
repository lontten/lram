let text = require("../pattern/text/text");

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
            if (node.StrList.length>0){
                text(node)
                if (node.StrList.length>0){
                    return doTextAnalysis(node,funList)
                }
            }

            return node.NodeList
        }
    }
}

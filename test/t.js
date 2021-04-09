const LmNode = require("../src/model/LmNode");
// const table = require("../src/analysis/tableAnalysis");

let node = new LmNode();
var data = `
aa|asf|asdfa|
--|sfa|sdf|
fsafa|sfsdf|dsf|

`
const line = "| - |  -  | -: | :-|  -";
reg =  /^\|((\s*-\s*|\s*-:\s*|\s*:-\s*)\|)+\s*$/

//第二行匹配table，失败
console.log(reg.test('-|'))


let all =line.split('|')
console.log(all)


const LmNode = require("../src/model/LmNode");
// const table = require("../src/analysis/tableAnalysis");
const hljs = require('highlight.js');

let node = new LmNode();
var data = `
aa|asf|asdfa|
--|sfa|sdf|
fsafa|sfsdf|dsf|

`
const line = "|safas|fsadf|asfasdf";
reg = /[\s\S]*?|/g
let match = line.match(reg);
console.log(RegExp.$1) // 12
console.log(RegExp.$2) // 21

console.log(match[0])
console.log(match[1])
console.log(match)
console.log("===============")
let exec =reg.exec(line);
console.log(exec)

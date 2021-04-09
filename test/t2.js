const LmNode = require("../src/model/LmNode");
// const table = require("../src/analysis/tableAnalysis");
const hljs = require('highlight.js');
var t=`
    \`\`\`
public void hello(){
int i=2;
}
    \`\`\`
    
    `
const highlightedCode = hljs.highlightAuto(t).value

var d = '<pre><code class="hljs">' + highlightedCode + '</code></pre>'
console.log(d)


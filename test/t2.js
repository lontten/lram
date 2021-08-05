const LmNode = require("../src/model/LmNode");
// const table = require("../src/analysis/tableAnalysis");
const hljs = require('highlight.js');
var t = `
    \`\`\`
public void hello(){
int i=2;
}
    \`\`\`
    
    `
const highlightedCode = hljs.highlightAuto(t).value

var d = '<pre><code class="hljs">' + highlightedCode + '</code></pre>'
console.log(d)


km

km.init()
km.use('line', function (line) {
    return node
})


km.parserInner((line) => {
    return {
        start: "",
        content: node,
        end: ""
    }
})


km.parserLine((line) => {

})


km.parserDiv({
    parse: (lines) => {

    },
    data: (lines) => {

    }

})


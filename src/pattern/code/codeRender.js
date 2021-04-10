const hljs = require('highlight.js');

module.exports = function render(node) {
    let n = node.map["type"];

    const highlightedCode = hljs.highlightAuto(node.data).value

    return {
        data: '<pre><code class="hljs">'+highlightedCode+'</code></pre>',
    }
}


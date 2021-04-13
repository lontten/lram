const katex = require('katex');
// require('katex/dist/contrib/mhchem.js'); // modify katex module

module.exports = function render(node) {
    const html = katex.renderToString(node.data, {
        displayMode: true,
        throwOnError: false
    })
    return {
        data: html
    }
}


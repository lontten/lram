let line = require("./plug/line");
let txt = require("./plug/txt");
let color = require("./plug/color");
let katex = require("./plug/katex");
let code = require("./plug/code");
const parserMap = {}
const innerFun = {}
const renderMap = {}

class Cen {
    use(f) {
        console.log('use')
        if (f.parser !== undefined) {
            parserMap[f.code] = f.parser
        }
        f.render.map(render => {
            renderMap[render.code] = render.fun
            innerFun[render.code] = render.subParserType
        })
    }

    render(str) {
        return coreTran(str, {code: 'init'})
    }
}


function render(token) {
    return renderMap[token.code](token, coreTran)
}


function coreTran(lineData, preToken) {
    let lines = lineData.trim().split('\n');
    let html = '';

    for (; lines.length > 0;) {
        let flag = false;

        for (const p of Object.keys(parserMap)) {

            if (preToken.code === 'init' || innerFun[preToken.code].indexOf(p) > 0) {
                let ds = parserMap[p](lines);
                if (ds.line > 0) {
                    flag = true
                    lines.shift()
                    ds.tokens.map(token => {
                        html += render(token)
                    })
                    break
                }
            }
        }

        if (!flag) {
            html += lines[0]
            lines.shift()
        }
    }
    return html
}



let cen = new Cen();
cen.use(txt)
cen.use(line)
cen.use(color)
cen.use(katex)
cen.use(code)


module.exports = Cen

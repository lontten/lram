let line = require("./plug/line");
let txt = require("./plug/txt");
let color = require("./plug/line-color");
let katex = require("./plug/katex");
let code = require("./plug/code");
const parserMap = {}
const innerFun = {}
const renderMap = {}

class Core {

    use(f) {
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


function coreRender(token) {
    return renderMap[token.code](token, coreTran)
}


function coreTran(lineData, preToken) {
    let lines = lineData.trim().split('\n');

    let html = '';

    for (; lines.length > 0;) {
        let flag = false;

        let parserFunCodes = Object.keys(parserMap);
        console.log('codes   '+parserFunCodes)
        for (const p of parserFunCodes) {
            if (preToken.code !== 'init' && innerFun[preToken.code].indexOf(p) < 0) {
                continue
            }
            if (preToken.code === 'init' && p.substr(0,5)==='line-') {
                continue
            }



            let ds = parserMap[p](lines);
            if (ds.line > 0) {
                flag = true
                lines.shift()
                ds.tokens.map(token => {
                    html += coreRender(token)
                })
                break
            }
        }

        if (!flag) {
            html += lines[0]
            lines.shift()
        }
    }
    return html
}

function render(str) {
    let cen = new Core();
    cen.use(txt)
    cen.use(line)
    cen.use(color)
    cen.use(katex)
    cen.use(code)

    return cen.render(str)
}

exports.render = render

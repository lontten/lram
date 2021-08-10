let line = require("./plug/line");
let txt = require("./plug/txt");
let color = require("./plug/line-color");
let katex = require("./plug/katex");
let code = require("./plug/code");
const parserMap = {}
const innerFun = {}
const renderMap = {}

class Core {
    constructor() {
        this.use(txt)
        this.use(line)
        this.use(color)
        this.use(katex)
        this.use(code)
    }

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
        for (const p of parserFunCodes) {
            if (preToken.code !== 'init' && innerFun[preToken.code].indexOf(p) < 0) {
                continue
            }
            if (preToken.code === 'init' && p.substr(0, 5) === 'line-') {
                continue
            }

            var s=lines

            console.log('ppp pp:------------------: '+p)
            console.log('html core*************qq******l*************8 ;;;'+JSON.stringify(lines))
            console.log('html core************qq*********s***********8 ;;;'+JSON.stringify(s))
            let ds = parserMap[p](lines);
            console.log('html core**************hh*********l*********8 ;;;'+JSON.stringify(lines)+JSON.stringify(ds))
            console.log('html core*************hh********s***********8 ;;;'+JSON.stringify(s)+JSON.stringify(ds))

            if (ds.line > 0) {
                flag = true
                console.log('html core********************************87 ;;;'+JSON.stringify(lines))
                lines.shift()
                console.log("-----------------------------lines -------------------- del ")
                ds.tokens.map(token => {
                    console.log('+= :: '+html)
                    html += coreRender(token)
                })
                break
            }
            console.log('html core********************************8 ;;;'+JSON.stringify(lines))

        }

        if (!flag) {
            console.log('p flag fa :: '+JSON.stringify(lines))
            console.log('p flag fa :tttttttttttttttt: '+JSON.stringify(html))
            if (lines.length===0){
                continue
            }
            html += coreRender({
                code:'txt',
                data:lines[0]
            })
            lines.shift()
            console.log("-----------------------------lines -------------------- del ")
        }
        console.log('didiididid========:'+html)
    }
    return html
}



function render(str) {
    let cen = new Core();
    return cen.render(str)
}

exports.render = render
exports.lram = new Core()

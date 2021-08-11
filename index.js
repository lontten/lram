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

    while (lines.length > 0) {

        let flag = false;

        let parserFunCodes = Object.keys(parserMap);
        for (const p of parserFunCodes) {
            if (preToken.code !== 'init' && innerFun[preToken.code].indexOf(p) < 0) {
                continue
            }
            if (preToken.code === 'init' && p.substr(0, 5) === 'line-') {
                continue
            }


            const v = JSON.parse(JSON.stringify(lines));
            let ds = parserMap[p](v);

            if (ds.line > 0) {
                flag = true
                lines.splice(0, ds.line)
                ds.tokens.map(token => {
                    html += coreRender(token)
                })
                break
            }
        }
        if (!flag) {
            let string = lines[0];
            if (string.substr(0,2)==='//'){
                html += coreRender({
                    code: 'txt',
                    data: string
                })
            }
            lines.shift()
        }
    }
    return html
}


function render(str) {
    let cen = new Core();
    return cen.render(str)
}

exports.render = render
exports.lram = new Core()

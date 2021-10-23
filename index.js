let line = require("./plug/title");
let txt = require("./plug/txt");
let color = require("./plug/line/color");
let green = require("./plug/line/green");
let katex = require("./plug/katex");
let code = require("./plug/code");
let table = require("./plug/table");
const parserMap = {}
const innerFun = {}
const renderMap = {}

const lineStyleParserArr = []
const lineStyleRenderMap = {}

class Core {
    constructor() {
        this.use(line)
        this.use(katex)
        this.use(code)
        this.use(table)
        this.use(txt)

        this.useLineStyle(color)
        this.useLineStyle(green)

    }

    useLineStyle(f) {
        if (f.parser !== undefined) {
            lineStyleParserArr.push(f.parser)
        }
        f.render.map(render => {
            lineStyleRenderMap[render.code] = render.fun
        })
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
    if (token.code === 's-txt') {
        return lineStyleCoreTran(token.data)
    }

    return renderMap[token.code](token, coreTran)
}


function lineStyleCoreTran(line) {
    var i = 0
    let html = '';
    while (true) {
        let flag = false;
        for (let lineP of lineStyleParserArr) {
            let ds = lineP(line);
            if (ds.match) {
                flag = true
                for (let token of ds.tokens) {
                    if (token.code === 's-txt') {
                        i++
                        if (i === 3) {
                            throw '100'
                        }
                        html += lineStyleCoreTran(token.data)
                    } else {
                        html += lineStyleRenderMap[token.code](token.data)
                    }
                }
                return html
            }
        }
        if (!flag) {
            html += line
            break
        }
    }
    return html
}


function coreTran(lineData, preToken) {
    if (preToken.code === 's-txt') {
        return lineStyleCoreTran(lineData)
    }

    let lines = lineData.trim().split('\n');

    let html = '';

    while (lines.length > 0) {
        let flag = false;

        let parserFunCodes = Object.keys(parserMap);
        for (const p of parserFunCodes) {
            if (preToken.code !== 'init' && innerFun[preToken.code].indexOf(p) < 0) {
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
            if (string.substr(0, 2) !== '//') {
                html += lineStyleCoreTran(string)
            }
            lines.shift()
        }
    }
    return html
}


exports.lram = new Core()

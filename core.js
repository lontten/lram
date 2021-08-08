let p1 = require("./plug/line");
let color = require("./plug/color");
let katex = require("./plug/katex");
let code = require("./plug/code");
const parserArr = []
const innerFun = {}
const renderMap = {}

renderMap['txt']=function (token, tran) {
    return token.data
}

class Cen {
    use(f) {
        parserArr.push(f.parser)
        f.render.map(render => {
            renderMap[render.code] = render.fun
            render.subParserType.map(typ => {
                innerFun[typ] = f.parser
            })
        })
    }

    render(str) {
        return coreTran(str)
    }
}


function render(token) {
    console.log('token:::'+token.code)
    return renderMap[token.code](token, coreTran)
}

function coreTran(lineData) {
    let lines = lineData.trim().split('\n');
    let html = '';

    for (; lines.length > 0;) {
        let flag = false;
        parserArr.map(fun => {
            let ds = fun(lines);
            console.log("ds::" + log(ds))
            if (ds.line > 0) {
                flag = true
                lines.splice(0, ds.line)
                ds.tokens.map(token => {
                    html += render(token)
                })
            }
        })

        console.log('flag::' + flag)
        if (!flag) {
            html += lines[0]
            lines.splice(0, 1)
        }
    }
    return html
}


function log(ss) {
    let s = JSON.stringify(ss);
    return s
}

let cen = new Cen();
cen.use(p1)
cen.use(color)
cen.use(katex)
cen.use(code)
let s = JSON.stringify(cen);
console.log(parserArr)
console.log(renderMap)
console.log(innerFun)
console.log(s)

var tt = `
sdafa
# sdfadfa
#k asdfjaskdf泛塞卡里番as
#c sadfasf
sjadkfsjadlf #c asdfafa
## sadfasdfa #c sadfasf
撒旦法思考
\`\`\`
public void hello(){
}
\`\`\`


`
let h = cen.render(tt);
console.log(h)

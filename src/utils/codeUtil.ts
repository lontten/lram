import {Parser} from "../model/Parser";
import {BaseToken} from "../model/token/token";

const codeParser = (lines: string[]) => {
    let parser = new Parser(0);
    let lineNum = 0

    let line = lines[0]


    let reg = /^```/
    if (!reg.test(line)) {
        return parser
    }

    reg = /^```\s*([\w\W]*?)\s*$/
    let exec = reg.exec(line);
    if (exec == null) {
        return parser
    }

    const token = new BaseToken('s-code')
    token.typ = exec[1]  //高亮语言类型

    while (true) {
        lines.shift()
        lineNum++

        if (lines.length === 0) {
            return parser
        }
        const line = lines[0]

        if (line === "```") {
            lineNum++
            break
        }
        token.data += line + '\n';
    }

    parser.add(token)

    return parser.set(lineNum)
}

export {
    codeParser
}
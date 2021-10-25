import {TableToken, Token} from "../../model/Token";
import {Parser, Plug} from "../../model/Parser";

export const easyTablePlug: Plug = {
    code: "s-table",
    parser: (lines) => {
        let tokens = new Array<Token>()
        let lineNum = 0

        let line = lines[0]
        if (line !== "$$") {
            return new Parser(0)
        }

        let token = new TableToken('s-table')
        while (true) {
            lines.shift()
            lineNum++


            if (lines.length === 0) {
                break
            }
            const line = lines[0]

            if (line.trim() === "$$") {
                lineNum++
                break
            }
        }

        tokens.push(token as Token)

        return new Parser(lineNum, tokens)

    },
    render: []
};


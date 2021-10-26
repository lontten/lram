import {TableToken, Token} from "../../model/Token";
import {Parser, Plug} from "../../model/Parser";

export const easyTablePlug: Plug = {
    code: "s-table",
    parser: (lines) => {
        let tokens = new Array<Token>()
        let lineNum = 0

        let line = lines[0]
        console.log(line);
        if (true) {
            return new Parser(0)
        }

        let token = new TableToken('s-table')



        tokens.push(token)

        return new Parser(lineNum, tokens)

    },
    render: []
};


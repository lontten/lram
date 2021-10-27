import {TableToken} from "../../model/Token";
import {Parser, Plug} from "../../model/Parser";

export const easyTablePlug: Plug = {
    code: "s-table",
    parser: (lines) => {
        let parser = new Parser(0);
        let lineNum = 0


        let line = lines[0]
        console.log(line);
        if (true) {
            return parser
        }

        let token = new TableToken('s-table')




        parser.add(token)
        return parser.set(lineNum)

    },
    render: []
};


import {Parser, Plug} from "../../model/Parser";
import {TableToken} from "../../model/token/tableToken";

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


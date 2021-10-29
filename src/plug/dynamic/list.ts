import {Parser, Plug} from "../../model/Parser";
import {ListToken, typType} from "../../model/token/listToken";
import {ListRenderFun} from "../../utils/listRender";

export const listPlug: Plug = {
    code: "s-list",
    parser: (lines) => {
        let parser = new Parser(0);
        let lineNum = 0

        let line = lines[0]

        let reg = /^(-|1\.|01\.|a\.|A\.|i\.|I\.|cn\.|al\.)\s+(\S+)$/
        let exec = reg.exec(line);

        if (exec == null) {
            return parser;
        }
        let typ = genTyp(exec[1]);
        let data = exec[2];



        let token = new ListToken('s-list');
        token.set(typ)
        token.add(data)


        while (true) {
            lines.shift()
            lineNum++

            if (lines.length == 0) {
                parser.add(token)
                return parser.set(lineNum)
            }
            let line = lines[0]


            //end
            if (line.trim() == '') {
                parser.add(token)
                return parser.set(lineNum + 1)
            }


            let reg = /^(-|1\.|01\.|a\.|A\.|i\.|I\.|cn\.|al\.)\s+(\S+)$/
            let exec = reg.exec(line);
            if (exec != null) {
                let data = exec[2];
                token.add(data)
                continue
            }


            let list = token.data.list;
            list[list.length - 1] += line
        }


    },
    render: [
        {
            code: "s-list",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: (t, _ctx, _tran) => {
                let token = t as ListToken;
                return ListRenderFun(token.data, _ctx, _tran)
            },
        }
    ]

};

const genTyp = (str: string): typType => {
    return str.replace('.', '') as typType
}
import {Token} from "../../model/Token";
import {Parser, Plug} from "../../model/Parser";

export const imgPlug :Plug= {
    code: "s-img",
    parser: (lines) => {
        let tokens = new Array<Token>();


        if (lines.length < 2) {
            console.log('len < 2');
            return new Parser(0);
        }

        let line = lines[0]
        if (line !== "@img") {
            console.log('!= @img');
            return new Parser(0);
        }


        let line2 = lines[1];
        if (line2.length < 5) {
            console.log('img data len < 5');
            return new Parser(0);
        }

        let line3 = lines[1];
        if (line3.trim() === "") {
            console.log('kong line err');
            return new Parser(0);
        }

        let token = new Token('s-img');
        token.data["data"] = line2


        tokens.push(token)


        return new Parser(3,tokens);

    },
    render: [
        {
            code: "s-img",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: (token: Token, ctx: any, tran: any) => {
                console.log(ctx)
                console.log(tran)

                let imgUrl = token.data["data"];
                let altName = ''
                let imgName = ''
                let temp = `
<figure class="figure">
    <img src="${imgUrl}" alt="${altName}"
         class="figure-img img-fluid rounded" >
    <figcaption class="figure-caption">${imgName}</figcaption>
</figure>
`

                return temp
            },
        }
    ]

};


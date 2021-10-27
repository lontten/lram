import {Token} from "../../model/token/token";
import {Parser, Plug} from "../../model/Parser";
import {ImgToken} from "../../model/token/imgToken";

export const imgPlug :Plug= {
    code: "s-img",
    parser: (lines) => {
        let parser = new Parser(0);


        if (lines.length < 2) {
            return parser;
        }

        let line = lines[0]
        if (line !== "@img") {
            return parser;
        }


        let line2 = lines[1];
        if (line2.length < 5) {
            return parser;
        }

        let line3 = lines[1];
        if (line3.trim() === "") {
            return parser;
        }

        let token = new Token('s-img');
        token.data["data"] = line2


        parser.add(token)
        return parser.set(3)


    },
    render: [
        {
            code: "s-img",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: (t, _ctx, _tran) => {
                let token = t as ImgToken;



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


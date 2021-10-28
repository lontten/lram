import {Parser, Plug} from "../../model/Parser";
import {ImgDto, ImgToken} from "../../model/token/imgToken";
import {ImgRenderFun} from "../../utils/imgRender";

export const imgPlug: Plug = {
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

        let token = new ImgToken('s-img');


        let imgDto = new ImgDto();
        imgDto.imgName = "a.jpg"
        imgDto.imgInfo = ""
        imgDto.imgUrl = line2

        token.set('h','left')
        token.add(imgDto)

        parser.add(token)
        return parser.set(3)

    },
    render: [
        {
            code: "s-img",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: (t, _ctx, _tran) => {
                let token = t as ImgToken;

                return ImgRenderFun(token.data, _ctx, _tran)
            },
        }
    ]

};


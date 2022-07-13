import {Plug} from "../../model/Parser";
import {ImgToken} from "../../model/token/imgToken";
import {imgParser, imgRender} from "../../utils/imgUtil";

export const imgPlug: Plug = {
    code: "s-img",
    parser: imgParser,
    render: [
        {
            code: "s-img",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: (t, _ctx, _tran) => {
                let token = t as ImgToken;

                return imgRender(token.data, _ctx, _tran)
            },
        }
    ]

};


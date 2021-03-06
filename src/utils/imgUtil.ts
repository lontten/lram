import {ImgDto, ImgGroupDto, ImgSpaceDto, ImgToken} from "../model/token/imgToken";
import {Parser} from "../model/Parser";

const imgParser = (lines: string[]) => {
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

    token.set('h', 'left')
    token.add(imgDto)

    parser.add(token)
    return parser.set(3)
}
const imgRender = (token: ImgGroupDto, _ctx: any, _tran: any) => {
    let dire = token.imgDirection;
    let imgPos = token.imgPos;
    let arr = token.imgList;

    let html = ''

    let divDire = 'row'
    if (dire == 'v') {
        divDire = 'column'
    }

    html += `
<div style="display: flex;align-items: center;flex-flow:  ${divDire} wrap ;justify-content:  ${imgPos}" class="lram lram-img">`

    for (let item of arr) {
        if (item instanceof ImgDto) {
            let imgName = item.imgName;
            let imgUrl = item.imgUrl;

            //img-info
            let imgInfo = item.imgInfo;
            let infoData = ''
            if (imgInfo != '') {
                let infoWidth = item.infoWidth;
                infoData += `
    <div style="margin: 20px; width: ${infoWidth}px">
        <p class="lead">${imgInfo}</p>
    </div>
`
            }

            let imgInfoPos = item.imgInfoPos;
            let zIndex = imgInfoPos.indexOf('.');
            let s = imgInfoPos.substring(0, zIndex);
            let imgInfoPosLR = 'row'
            if (s == 'left') {
                imgInfoPosLR = 'row-reverse'
            }

            let imgInfoPosUCD = imgInfoPos.substring(zIndex + 1, imgInfoPos.length);

            let imgStyle = genImgStyle(item)


            html += `
<div style="flex: none; display: flex; align-items: ${imgInfoPosUCD}; flex-direction: ${imgInfoPosLR}">
    <figure class="figure" ">
        <img src="${imgUrl}"
             alt="${imgName}"
             style="${imgStyle}"
             class="figure-img img-fluid rounded">
        <figcaption class="figure-caption">${imgName}</figcaption>
    </figure>
${infoData}
</div>
`

        }
        if (item instanceof ImgSpaceDto) {
            for (let i = 0; i < item.num; i++) {
                html += '<div style="margin: 40px;"></div>'
            }
        }

        if (item instanceof ImgGroupDto) {
            html += imgRender(item, _ctx, _tran)
        }

    }
    html += '</div>'
    return html

}

const genImgStyle = (v: ImgDto) => {
    let imgStyle = ''

    if (v.colorPoint > 0) {
        let cp = (10 - v.colorPoint) / 10
        imgStyle += `filter: grayscale(${cp});`
    }

    if (v.height != 0 || v.width != 0) {
        if (v.height != 0) {
            imgStyle += `height: ${v.height}px;`
        }
        if (v.width != 0) {
            imgStyle += `width: ${v.width}px;`
        }
        return imgStyle
    }
    if (v.selfPoint != 0) {
        imgStyle += `width: ${v.selfPoint}%;`
        return imgStyle
    }


    if (v.winPoint != 0) {
        imgStyle += `width: ${v.winPoint}vw;`
        return imgStyle
    }


    return imgStyle
}
export {imgRender, imgParser}
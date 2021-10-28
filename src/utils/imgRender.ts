import {ImgDto, ImgGroupDto, ImgSpaceDto} from "../model/token/imgToken";

export const ImgRenderFun = (token: ImgGroupDto, _ctx: any, _tran: any) => {
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

            let imgInfoPos = item.imgInfoPos;
            let zIndex = imgInfoPos.indexOf('.');
            let s = imgInfoPos.substring(0, zIndex);
            let imgInfoPosLR = 'row'
            if (s == 'left') {
                imgInfoPosLR = 'row-reverse'
            }
            let imgInfoPosUCD = imgInfoPos.substring(0, zIndex);


            html += `
<div style="flex: none; display: flex; align-items: ${imgInfoPosUCD}; flex-direction: ${imgInfoPosLR}">
        <figure class="figure" style="margin:0 10px;">
            <img src="${imgUrl}" alt="${imgName}"
                 class="figure-img img-fluid rounded">
            <figcaption class="figure-caption">${imgName}</figcaption>
        </figure>
        <div style="margin: 20px; width: 20vw">
            <p class="lead">${imgInfo}</p>
        </div>
</div>
`

        }
        if (item instanceof ImgSpaceDto) {
            for (let i = 0; i < item.num; i++) {
                html += '<div style="margin: 40px;"></div>'
            }
        }

        if (item instanceof ImgGroupDto) {
            html += ImgRenderFun(item, _ctx, _tran)
        }

    }
    html += '</div>'
    return html

}

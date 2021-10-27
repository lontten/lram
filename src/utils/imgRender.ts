import {CoreTran} from "../model/core";
import {ImgDto, ImgGroupDto, ImgSpaceDto, ImgToken} from "../model/token/imgToken";

export const ImgRenderFun = (token: ImgToken, _ctx: any, _tran: CoreTran) => {
    let dire = token.imgDirection;
    let imgPos = token.imgPos;
    let arr = token.data;
    for (let item of arr) {
        if (item instanceof ImgDto) {

        }
        if (item instanceof ImgSpaceDto) {

        }

        if (item instanceof ImgGroupDto) {

        }


    }

    let tmp = `

<!--// 居中 justify-content: center"-->
<div style="display: flex ;align-items: center;flex-flow: row wrap ;justify-content: end" class="lram lram-img">

    <!--    //img-info u c d    align-items: end;-->
    <!--    //img l r           flex-direction: row-reverse-->
    <div style="flex: none; display: flex; align-items: end; flex-direction: row-reverse">
        <figure class="figure" style="margin:0 10px ; ">
            <img src="${imgUrl}"
                 alt="${imgName}"
                 class="figure-img img-fluid rounded">
            <figcaption class="figure-caption">${imgName}</figcaption>
        </figure>

        <div style="margin: 20px; width: 20vw">
            <p class="lead">${img - info}</p>
        </div>
    </div>

    <div style="margin: 40px;"></div>


</div>

    `
    let html = ''
    return html

}
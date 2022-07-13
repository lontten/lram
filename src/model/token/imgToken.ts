import {Token} from "./token";

export class ImgToken extends Token {

    add(data: ImgType) {
        this.data.imgList.push(data)
    }

    set(dir: direType, pos: posType) {
        this.data.imgDirection = dir
        this.data.imgPos = pos
    }

    data: ImgGroupDto = new ImgGroupDto()
}

export type direType = 'h' | 'v'
export type posType = 'left' | 'center' | 'right'


export class ImgDto {
    //图片名字
    imgName: string = ''
    //图片地址
    imgUrl: string = ''
    //图片介绍
    imgInfo: string = ''
    //图片介绍位置 left.start:上 right.center:中 end:下
    imgInfoPos: string = 'right.end'

    //img-info 图片介绍宽度px
    infoWidth: number = 0

    //img style

    //px 图片的宽高，不设置时，为默认宽高
    //优先级：直接宽高》等比缩放》窗口百分比
    width: number = 0
    height: number = 0


    //图片等比缩放 0-100，默认为0，不缩放
    selfPoint: number = 0
    //图片相对浏览器桌面的百分比 0-100
    winPoint: number = 0

    //color 0-10 图片灰度-反向-图片颜色比值，0黑白，10原色
    colorPoint: number = -1

}

export class ImgSpaceDto {
    num: number = 0
}

export class ImgGroupDto {
    //图片组排列 h:水平 v:竖直
    imgDirection: direType = 'h'
    //图片介绍位置 left:左 center:中 right:右
    imgPos: posType = 'left'

    imgList: Array<ImgType> = new Array<ImgType>()

}

export type ImgType = ImgDto | ImgSpaceDto | ImgGroupDto


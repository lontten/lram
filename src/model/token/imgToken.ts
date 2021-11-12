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
    imgName: string = ''
    imgUrl: string = ''
    imgInfo: string = ''
    //图片介绍位置 left.start:上 right.center:中 end:下
    imgInfoPos: string = 'right.end'

    //img-info
    infoWidth: number = 0

    //img style

    //px
    width: number = 0
    height: number = 0


    selfPoint: number = 0
    winPoint: number = 0

    //color 0-10
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


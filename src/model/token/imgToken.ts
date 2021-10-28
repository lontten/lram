export class ImgToken {
    constructor(code: string) {
        this.code = code
    }

    add(data: ImgType) {
        this.data.imgList.push(data)
    }

    set(dir: direType, pos: posType) {
        this.data.imgDirection = dir
        this.data.imgPos = pos
    }

    public code: string

    public data: ImgGroupDto = new ImgGroupDto()
}

export type direType = 'h' | 'v'
export type posType = 'left' | 'center' | 'right'


export class ImgDto {
    public imgName: string = ''
    public imgUrl: string = ''
    public imgInfo: string = ''
    //图片介绍位置 left.start:上 right.center:中 end:下
    public imgInfoPos: string = 'right.end'

    public imgWNum: number = 0
    public imgWPoint: number = 0
    public imgHNum: number = 0
    public imgHPoint: number = 0
}

export class ImgSpaceDto {
    public num: number = 0
}

export class ImgGroupDto {
    //图片组排列 h:水平 v:竖直
    public imgDirection: direType = 'h'
    //图片介绍位置 left:左 center:中 right:右
    public imgPos: posType = 'left'

    public imgList: Array<ImgType> = new Array<ImgType>()

}

export type ImgType = ImgDto | ImgSpaceDto | ImgGroupDto


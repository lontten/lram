
export class ImgToken {
    constructor(code: string) {
        this.code = code
    }

    add(dto: ImgDto | ImgGroupDto) {
        this.data.push(dto as ImgDiv)
    }


    public code: string
    //图片组排列 h:水平 v:竖直
    public imgDire: string = 'h'

    public data: Array<ImgDiv> = new Array<ImgDiv>()
}

export class ImgDto {
    public imgName: string = ''
    public imgUrl: string = ''
    //图片介绍位置 left:左 center:中 right:右
    public imgDire: string = 'left'

    public imgWNum: number = 0
    public imgWPoint: number = 0

    public imgHNum: number = 0
    public imgHPoint: number = 0

    public imgInfo: string = ''
    //图片介绍位置 left.start:上 right.center:中 end:下
    public imgInfoDire: string = 'right.end'

}

export class ImgGroupDto {
    //图片组排列 h:水平 v:竖直
    public imgDire: string = 'h'

    public imgList: Array<ImgDto> = new Array<ImgDto>()

}

export type ImgDiv = ImgDto & ImgGroupDto


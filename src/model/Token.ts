export class ComToken {
    constructor(code: string) {
        this.code = code
        this.data = new Map<string, any>()
    }

    public code: string
    public data: Map<string, any> | string
}

export class TableToken {
    constructor(code: string) {
        this.code = code
        this.colNum = 0
        this.data = []
        this.colType = []
        this.rowNum = 0
    }


    colNum: number;
    colType: number[];
    rowNum: number;

    public code: string
    public data: string[][]
}

export class ImgToken {
    constructor(code: string) {
        this.code = code
        this.colNum = 0
        this.data = []
        this.colType = []
        this.rowNum = 0
    }


    colNum: number;
    colType: number[];
    rowNum: number;

    public code: string
    public data: string[][]
}

export class ImgDto {
    public imgName :string=''
    public imgUrl :string=''
    //图片介绍位置 left:左 center:中 right:右
    public imgDire:string='left'

    public imgWNum :number=0
    public imgWPoint :number=0

    public imgHNum :number=0
    public imgHPoint :number=0

    public imgInfo :string=''
    //图片介绍位置 left.start:上 right.center:中 end:下
    public imgInfoDire:string='right.end'

}
export class ImgGroupDto {
    //图片组排列 h:水平 v:竖直
    public imgDire:string='h'

    public imgList :Array<ImgDto>=new Array<ImgDto>()

}
export type Token = ComToken | TableToken

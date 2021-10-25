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

export type Token = ComToken & TableToken

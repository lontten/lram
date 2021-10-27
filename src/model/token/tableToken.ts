
export class TableToken {
    constructor(code: string) {
        this.code = code
    }


    public colNum: number = 0
    public colType: number[] = []
    public rowNum: number = 0

    public code: string
    public data: string[][] = []
}

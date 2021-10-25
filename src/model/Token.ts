export class Token {
    //table
    colNum?: number;
    colType?: number[];
    rowNum?: number;

    constructor(code: string) {
        this.code = code
        this.data = new Map<string, any>()
    }

    public code: string
    public data: Map<string, any> | string
}
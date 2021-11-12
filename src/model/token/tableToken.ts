import {Token} from "./token";

export class TableToken extends Token {
    colNum: number = 0
    colType: number[] = []
    rowNum: number = 0

    data: string[][] = []
}

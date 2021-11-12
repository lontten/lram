import {Token} from "./token";

export class ListToken extends Token {
    add(data: ListType) {
        this.data.list.push(data)
    }

    set(typ: typType) {
        this.data.typ = typ
    }

    data: ListDto = new ListDto()
}

export class ListDto {
    // 0 *
    // 1 1.
    // 2 a.
    // 3 A.
    // 4 i.
    // 5 I.
    // 6 01.
    // 7 al.
    // 8 cn.
    typ: typType = '1'

    list: Array<ListType> = []
}


export type typType = '-' | '1' | '01' | 'al' | 'a' | 'A' | 'i' | 'I' | 'cn'
export type ListType = ListDto | string


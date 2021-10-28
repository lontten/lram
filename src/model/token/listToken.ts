export class ListToken {
    constructor(code: string) {
        this.code = code
    }

    add(data: ListType) {
        this.data.list.push(data)
    }


    set(typ: typType) {
        this.data.typ = typ
    }


    public code: string

    public data: ListDto = new ListDto()
}

export class ListDto {
    // 1 1.
    // 2 a.
    // 3 A.
    // 4 i.
    // 5 I.
    public typ: typType = '1'

    public list: Array<ListType> = []
}


export type typType = '1' | 'a' | 'A' | 'i' | 'I'
export type ListType = ListDto | string


class Token {
    constructor() {
        this.code = ""
        this.data = ""
    }

    //解析类型
    code
    //解析数据
    map = {}

    Tokens = []
    StrList = []

    setData(data) {
        this.StrList = data.trim().split('\n')
    }
}

class Lram {
    use(f) {

    }
}


let lram = new Lram();
lram.use({
        parser: function (lines) {
            var arr = []


            return {
                line: 1,
                tokens: arr
            }
        },
        render: function (token) {
            var arr = []
            arr[0] = Brif
            return arr
        },
        inLineType: ["code", "tag-h"],//解析后的数据可被这些类型继续解析
        preLineType: ["html"] //解析前置类型
    }
)


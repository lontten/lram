const plug = {
    render: [
        {
            code: "s-txt",
            subParserType: [],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {
                return tran(token.data, token)
            },
        }
    ]

};

module.exports = plug

const plug = {
    render: [
        {
            code: "txt",
            subParserType: ['katex-line','big'],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {
                return token.data
            },
        }
    ]

};

module.exports = plug

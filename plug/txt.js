const plug = {
    render: [
        {
            code: "txt",
            subParserType: ['katex-line','big'],//解析后的数据可被这些类型继续解析
            fun: function (token, tran) {
                console.log('txt render :: '+token.data)
                return token.data
            },
        }
    ]

};

module.exports = plug

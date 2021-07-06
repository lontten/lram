const hljs = require('highlight.js');

module.exports = function render(node) {
    let format = node.map["format"];
    switch (format) {
        //下划线
        case 'u' :
            return {
                head: '<u>',
                data: node.data,
                end: '</u>'
            }
        //删除线
        case 'del' :
            return {
                head: '<del>',
                data: node.data,
                end: '</del>'
            }
        //斜体
        case 'i' :
            return {
                head: '<i>',
                data: node.data,
                end: '</i>'
            }
        //粗体
        case 'b' :
            return {
                head: '<b>',
                data: node.data,
                end: '</b>'
            }
        //斜粗体
        case 'ib' :
            return {
                head: '<i><b>',
                data: node.data,
                end: '</b></i>'
            }
        //下标
        case 'sub' :
            return {
                head: '<sub>',
                data: node.data,
                end: '</sub>'
            }
        //上标
        case 'sup' :
            return {
                head: '<sup>',
                data: node.data,
                end: '</sup>'
            }
    }

}


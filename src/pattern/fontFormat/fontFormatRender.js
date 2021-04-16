const hljs = require('highlight.js');

module.exports = function render(node) {
    let format = node.map["format"];
    switch (format) {
        //下划线
        case 'u' :
            return {data: '<u>' + node.data + '</u>'}
        //删除线
        case 'del' :
            return {data: '<del>' + node.data + '</del>'}

        //斜体
        case 'i' :
            return {data: '<i>' + node.data + '</i>'}
        //粗体
        case 'b' :
            return {data: '<b>' + node.data + '</b>'}
        //斜粗体
        case 'ib' :
            return {data: '<i><b>' + node.data + '</b></i>'}

        //下标
        case 'sub' :
            return {data: '<sub>' + node.data + '</sub>'}

        //上标
        case 'sup' :
            return {data: '<sup>' + node.data + '</sup>'}

    }

}


const katex = require('katex');
require('katex/dist/contrib/mhchem.js'); // modify katex module
var codeType = {}
codeType.str = 0
codeType.hp = 101


codeType.code = 200
codeType.math = 300
codeType.table = 400

codeType.mLink = 501


class MdNode {
    hasNode
    //解析类型
    code
    //解析数据
    data

    map = {}

    //index i
    //data ana
    list
}


var text = `
sss
# assss

## sss
`


var MdBaseLine = ''
var MdBaseHtml = ''
var MdBaseIndex = 0
var MdBaseList = []
var MdBaseStrings = text.trim().split('\n');


//doing
MdBaseLine = MdBaseStrings.pop()
while (MdBaseLine !== undefined) {
    if (MdBaseLine.trim().length === 0) {
        continue
    }

    let status = 0
    status = lineAnalysis();
    if (status === 1) {
        continue
    }
    status = lineMAnalysis();
    if (status === 1) {
        continue
    }
    console.log("hello")
}

//code
function codeAnalysis() {

    var node = new MdNode();
    let expr = "\\A\\s*```";
    if (line.exec(expr) == null) {
        return 0;
    }

    //匹配code成功
    expr = "\\A\\s*```\\s*([\\s\\S]*?)\\s*\\Z";
    var mc = Regex.Match(MdBaseData.line, expr);
    dataCode.type = mc.Groups[1].Value;
    while (true) {
        string
        tmpstr = MdBaseData.sr.ReadLine();
        if (tmpstr == null) {
            break;
        }

        if (tmpstr.Trim().Equals("```")) {
            break;
        }

        dataCode.data += tmpstr;
    }
    MdBaseData.codeList.Add(MdBaseData.num, dataCode);

    //结束处理
    MdBaseData.num++;
    MdBaseData.line = MdBaseData.sr.ReadLine();
    return 1;
}

//table
// function tableAnalysis(i) {
//     var expr = "^\\|([\\s\\S]*\\|)+\\s*$";
//     if (line.exec(expr) == null) {
//         return 0;
//     }
//
//     //匹配table 第一行 成功
//     expr = "[\\s\\S]*?\\|";
//     var mcs = Regex.Matches(MdBaseData.line, expr);
//     var oneLineNum = mcs.Count - 1;
//
//     List < string > oneLineHeadDatalist = new List < string > ();
//     for (var i1 = 1; i1 < mcs.Count; i1++) {
//         oneLineHeadDatalist.Add(mcs[i1].Value);
//     }
//
//     var tmpLine = MdBaseData.line;
//     MdBaseData.line = MdBaseData.sr.ReadLine();
//     expr = "^\\|((\\s*-\\s*|\\s*-:\\s*|\\s*:-\\s*)\\|)+\\s*$";
//     //第二行匹配table，失败
//     if (!Regex.Match(MdBaseData.line, expr).Success) {
//         //无法匹配table模式，第一行直接显示,
//         //line为第二行内容，向下进行匹配
//         MdBaseData.strList.Add(MdBaseData.num, tmpLine);
//         MdBaseData.num++;
//         return 1;
//     }
//
//     //第二行匹配table成功，进入table模式
//     expr = "(\\s*-\\s*|\\s*-:\\s*|\\s*:-\\s*)\\|";
//     mcs = Regex.Matches(MdBaseData.line, expr);
//     var twoLineNum = mcs.Count;
//     var tableColNum = oneLineNum > twoLineNum ? oneLineNum : twoLineNum;
//     List < List < string >> tableDataList = new List < List < string >> ();
//
//     //确定表格列数，
//     if (twoLineNum < oneLineNum) {
//         var tmp = new List < string > ();
//         for (var j = 0; j < twoLineNum - 1; j++) {
//             tmp[j] = oneLineHeadDatalist[j];
//         }
//
//         for (var j = twoLineNum - 1; j < oneLineNum; j++) {
//             tmp[twoLineNum - 1] += oneLineHeadDatalist[j];
//         }
//
//         tableDataList.Insert(1, tmp);
//         tmp = new List < string > ();
//         foreach(Match
//         o in mcs
//     )
//         {
//             tmp.Add(o.Value);
//         }
//
//         tableDataList.Insert(0, tmp);
//     } else {
//         tableDataList.Insert(1, oneLineHeadDatalist);
//         var tmp = new List < string > ();
//         for (var j = 0; j < oneLineNum; j++) {
//             tmp[j] = mcs[j].Value;
//         }
//
//         tableDataList.Insert(0, tmp);
//     }
//
//
//     MdBaseData.line = MdBaseData.sr.ReadLine();
//     while (true) {
//         List < string > tmpTableList = new List < string > ();
//         if (MdBaseData.line == null) {
//             break;
//         }
//
//         Console.WriteLine("table line no null::" + MdBaseData.line);
//         if (MdBaseData.line.Trim().Length == 0) {
//             continue;
//         }
//
//         //table 3
//         expr = "^\\|([\\s\\S]*\\|)+\\s*$";
//         //第一行匹配table
//         if (!Regex.Match(MdBaseData.line, expr).Success) {
//             continue;
//         }
//
//         expr = "[\\s\\S]*?\\|";
//         mcs = Regex.Matches(MdBaseData.line, expr);
//         var len = mcs.Count - 1;
//         len = tableColNum > len ? len : tableColNum;
//         for (var j = 0; j <= len; j++) {
//             tmpTableList.Add(mcs[j].Value);
//         }
//
//         tableDataList.Add(tmpTableList);
//         MdBaseData.line = MdBaseData.sr.ReadLine();
//     }
//
//     //不匹配table
//     //i++,结束匹配
//     MdBaseData.num++;
//     return 1;
// }


//line
function lineAnalysis() {
    let expr = "\\s*#+ ";
    if (!new RegExp(expr).test(MdBaseLine)) {
        return 0;
    }

    //匹配line成功
    MdBaseLine = MdBaseLine.trimStart();

    expr = "(\\s*#+ )([\\w\\W]*)";
    let exec = new RegExp(expr).exec(MdBaseLine);

    let head = exec[1];
    let data = exec[2];

    let mdNode = new MdNode();
    mdNode.hasNode = true
    mdNode.code = codeType.h1
    mdNode.data = data
    mdNode.map["h"] = head.length - 1


    //结束处理
    MdBaseIndex++
    MdBaseLine = MdBaseStrings.pop()
    return 1;
}

//lineM
function lineMAnalysis() {

}

function tableToHtml() {

}

function codeToHtml() {

}

function mathToHtml() {

}









function toHtmlCore(dataList) {
    dataList.forEach(node => {
        const code = node.code;
        const data = node.data;
        const map = node.map;
        const hasNode = node.hasNode;
        const list = node.list;


        if (hasNode) {
            toHtmlCore(list)
        }
        switch (code) {
            case codeType.hp:
                const type = node.map["h"];
                MdBaseHtml += `<h` + type + `>` + node.data + `</h` + type + `>`;
                break;
            case codeType.math:
                const tmp = katex.renderToString(data, null);
                MdBaseHtml += tmp;
                break


        }
        // do something

    })


}

MdBaseAnalysisList = []

const toHtml = function (data) {
    toHtmlCore(MdBaseList)


    return MdBaseHtml
}
module.exports.toHtml = toHtml;

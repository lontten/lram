let LmNode = require("../../model/LmNode");
let text = require("../text/text");

module.exports = function parser(node) {
    switch (node.code) {
        case "text":
        case "code":
        case "math":
            return false
    }
    if (node.StrList.length === 0) {
        return false
    }

    let line = node.StrList[0]

    let reg = /^\|([\s\S]*\|)+[\s\S]*$/;
    if (!reg.test(line)) {
        return false
    }

    //匹配table 第一行 成功
    reg = /[\s\S]*?\|/g
    let oneLineHeadDatalist = line.split('|');
    oneLineHeadDatalist.shift()
    const oneLineNum = oneLineHeadDatalist.length

    let twoLine = node.StrList[1]

    reg =  /^\|((\s*-\s*|\s*-:\s*|\s*:-\s*)\|)+\s*$/

    //第二行匹配table，失败
    if (!reg.test(twoLine)) {
        //无法匹配table模式，第一行直接显示,
        //line为第二行内容，向下进行匹配
        text(node)
        return false;
    }


    //第二行匹配table成功，进入table模式
    let twoLineHeadDatalist = twoLine.split('|');
    twoLineHeadDatalist.shift()
    const twoLineNum = twoLineHeadDatalist.length

    var tableColNum = oneLineNum > twoLineNum ? oneLineNum : twoLineNum;
    List < List < string >> tableDataList = new List < List < string >> ();

    //确定表格列数，
    if (twoLineNum < oneLineNum) {
        tmp = new List < string > ();
        for (var j = 0; j < twoLineNum - 1; j++) {
            tmp[j] = oneLineHeadDatalist[j];
        }

        for (var j = twoLineNum - 1; j < oneLineNum; j++) {
            tmp[twoLineNum - 1] += oneLineHeadDatalist[j];
        }

        tableDataList.Insert(1, tmp);
        tmp = new List < string > ();
        foreach(Match
        o in mcs
    )
        {
            tmp.Add(o.Value);
        }

        tableDataList.Insert(0, tmp);
    } else {
        tableDataList.Insert(1, oneLineHeadDatalist);
        tmp = new List < string > ();
        for (var j = 0; j < oneLineNum; j++) {
            tmp[j] = mcs[j].Value;
        }

        tableDataList.Insert(0, tmp);
    }


    MdBaseData.line = MdBaseData.sr.ReadLine();
    while (true) {
        List < string > tmpTableList = new List < string > ();
        if (MdBaseData.line == null) {
            break;
        }

        Console.WriteLine("table line no null::" + MdBaseData.line);
        if (MdBaseData.line.Trim().Length == 0) {
            continue;
        }

        //table 3
        expr = "^\\|([\\s\\S]*\\|)+\\s*$";
        //第一行匹配table
        if (!Regex.Match(MdBaseData.line, expr).Success) {
            continue;
        }

        expr = "[\\s\\S]*?\\|";
        mcs = Regex.Matches(MdBaseData.line, expr);
        var len = mcs.Count - 1;
        len = tableColNum > len ? len : tableColNum;
        for (var j = 0; j <= len; j++) {
            tmpTableList.Add(mcs[j].Value);
        }

        tableDataList.Add(tmpTableList);
        MdBaseData.line = MdBaseData.sr.ReadLine();
    }

    //不匹配table
    //i++,结束匹配
    MdBaseData.num++;
    return 1;
}

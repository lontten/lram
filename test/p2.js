line='|aa|bb|'
reg = /^\|([\s\S]*\|)+\s*$/
//第一行匹配table
if (!reg.test(line)) {
    throw 'false'
}

reg = /^\|(([\s\S]*?\|)+?)\s*$/
let exec = reg.exec(line);
console.log(JSON.stringify(exec))

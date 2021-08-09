let r = require('../index');


var t=`
aaa
\`\`\`
bb
cc

dddd
 `
let s = r.render(t)
console.log("ssss-------------html-----")
console.log(s)

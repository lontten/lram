let r = require('../index');


var t=`
aaa
\`\`\`
bb<br>
cc
\`\`\`

dddd
 `
let s = r.render(t)
console.log("ssss-------------html-----")
console.log(s)

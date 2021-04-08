let mb = require("../index");
var t=`
# #  #  #  这是一个标题
skjfa
aaaaaa

\`\`\`java
    public void hello(){

}
\`\`\`
 `
let s = mb.toHtml(t);
console.log("ssss-------------html-----")
console.log(s)

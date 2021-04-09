let mb = require("../index");
var t=`
    \`\`\`
public void hello(){
int i=2;
}
    \`\`\`
    
    `
let s = mb.render(t);
console.log("ssss-------------html-----")
console.log(s)

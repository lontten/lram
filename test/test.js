let c = require('../index');

let lram = new c()
var t=`
# #  #c  #  这是一个标题

### asdfasf #c sdfdsaf
 `
let s = lram.render(t)
console.log("ssss-------------html-----")
console.log(s)

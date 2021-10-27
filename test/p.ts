import {ImgToken, IToken, TableToken, Token} from "../dist/model/Token";

let tokenTable = new TableToken('s');
console.log(tokenTable)


let array = new Array<Token>();
let tableToken = new TableToken('');
let a= tableToken  as IToken
console.log(  array instanceof Array)
console.log(  a instanceof TableToken )
console.log(  a instanceof ImgToken )


import {Lram, PlugTrans, Token, Tokens} from '../index'

let lram = new Lram();

let txtP = new PlugTrans();


lram.use(txtP)

let s = lram.render("wo");

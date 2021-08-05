let require1 = require('../plugs/table');
import {Lram, PlugTrans, Token, Tokens} from '../index'

let lram = new Lram();

let txtP = new PlugTrans();


lram.use(require1)

let s = lram.render("wo");

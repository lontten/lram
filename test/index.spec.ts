import {helloWorld, lram} from '../src'
import {htmlTmp} from "./utils/cost";
import {writeFile} from "fs";
import {expect, test} from 'vitest'

test('helloWorld', () => {
    expect(helloWorld()).equals('Howdy!')

})


test('do render', () => {

    var t = `
## a

$$
f(x)=\\int_{-\\infty}^\\infty\\widehat f\\xi\\,e^{2\\pi i\\xi x}\\,d\\xi
$$



- saflkdsaf
- jsdljfas
- sdjflsaf

1. aaa
asjdflaksdjf
asjdflkdasf
asdjfkaf
1. bb
1. cc

01. aaa
01. bb
01. cc

al. aaa
al. bb
al. cc

cn. aaa
cn. bb
cn. cc

i. aaa
i. bb
i. cc

I. aaa
I. bb
I. cc

a. aaa
a. bb
a. cc

A. aaa
A. bb
A. cc





 `
    let s = lram.render(t);
    console.log(s)

    let html = htmlTmp.replace('tmp_data', s)
    writeFile('./tmp/index.html', html, function (err) {
        if (err) {
            throw err;
        }
    })


})

import {lram} from '../src'
import {htmlTmp} from "./utils/cost";
import {writeFile} from "fs";
import {test} from 'vitest'

test('hx', () => {

    var t = '# a'
    let s = lram.render(t);
    console.log(s)

    let html = htmlTmp.replace('tmp_data', s)
    writeFile('./tmp/index.html', html, function (err) {
        if (err) {
            throw err;
        }
    })


})

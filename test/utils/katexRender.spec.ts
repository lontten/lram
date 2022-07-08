import {htmlTmp} from "./cost";
import {writeFile} from "fs";
import {renderToString} from "katex";

describe('helloWorld', () => {
    it('Should return greetings', () => {
        const t = 'f(x)=\\int_{-\\infty}^\\infty\\widehat f\\xi\\,e^{2\\pi i\\xi x}\\,d\\xi'

        let s = renderToString(t, {
            displayMode: true,
            throwOnError: false
        })


        console.log(s);

        let html = htmlTmp.replace('tmp_data', s)
        writeFile('./tmp/katex.html', html, function (err) {
            if (err) {
                throw err;
            }
        })


    })
})

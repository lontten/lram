import {htmlTmp} from "../../test/utils/cost";
import {writeFile} from "fs";
import {lram} from "../index";
import {test} from "vitest";

test('helloWorld', () => {
    const t = `
|afdaf|fafda|
|-|-|
|afdsdafffffffffffffffsdfasdfsdafgsdagdsagasgasgasgasffffsdfsafaffffffffffffffffjkflajngkdlasngvaewijnksldfvdsafsdfffffffsdfasdfsadgwefffffsdfsdafsad阿塞夫东方赛弗撒扽赛ffdgwefffffsdfsdafsad阿塞夫东方赛弗撒扽赛ffdgwefffffsdfsdafsad阿塞夫东方赛弗撒扽赛ffdgwefffffsdfsdafsad阿塞夫东方赛弗撒扽赛ffdgwefffffsdfsdafsad阿塞夫东方赛弗撒扽赛ffff赛弗撒扽撒旦fffjfkaldfjlksjflkklfjasdflfffffffffafxxxxx|fafda|
|afdaf|fafda|
       
       `

    let s = lram.render(t);
    console.log(s)

    let html = htmlTmp.replace('tmp_data', s)
    writeFile('./tmp/table.html', html, function (err) {
        if (err) {
            throw err;
        }
    })
})

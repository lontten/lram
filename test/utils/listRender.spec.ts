import {htmlTmp} from "./cost";
import {writeFile} from "fs";
import {ListDto} from "../../src/model/token/listToken";
import {ListRenderFun} from "../../src/utils/listRender";

describe('list token render', () => {
    it('Should return greetings', () => {


        let dto = new ListDto();
        dto.typ='-'
        dto.list.push('a')
        dto.list.push('a')


        let dto2 = new ListDto();
        dto2.typ='-'
        dto2.list.push('2')
        dto2.list.push('2')
        dto2.list.push('2')


        let dto3 = new ListDto();
        dto3.typ='i'
        dto3.list.push('3')
        dto3.list.push('3')

        dto2.list.push(dto3)
        dto2.list.push('2')
        dto2.list.push('2')

        dto.list.push(dto2)

        dto.list.push('a')
        dto.list.push('a')
        dto.list.push('a')


        let s = ListRenderFun(dto, null, null);
        console.log(s);

        let html = htmlTmp.replace('tmp_data', s)
        writeFile('./tmp/list.html', html, function (err) {
            if (err) {
                throw err;
            }
        })


    })
})

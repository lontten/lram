import {expect} from "chai";
import {Parser} from "../../model/Parser";
import {QuoteToken} from "../../model/token/quoteToken";
import {quoteParser} from "../../utils/quoteUtil";

describe('parser', () => {
    it('Should return greetings', () => {
        let list = [

            {
                a: ["adfsaf"],
                b: new Parser(0)
            },
        ]

        let parser = new Parser(2);
        let token = new QuoteToken('s-quote');
        token.data.push({
            typ: 1,
            data: 'aaa'
        })

        parser.add(token)

        list.push({
            a: [`> aaa
            `],
            b: parser
        })


        let parser2 = new Parser(3);
        let token2 = new QuoteToken('s-quote');
        token2.data.push({
            typ: 1,
            data: 'aa'
        })
        token2.data.push({
            typ: 2,
            data: 'bb'
        })

        parser2.add(token2)

        list.push({
            a: [`> aa
            >> bb
            `],
            b: parser2
        })

        let parser22 = new Parser(3);
        let token22 = new QuoteToken('s-quote');
        token22.data.push({
            typ: 1,
            data: 'aa'
        })
        token22.data.push({
            typ: 1,
            data: 'bb'
        })

        parser22.add(token22)

        list.push({
            a: [`> aa
            > bb
            `],
            b: parser22
        })


        for (let v of list) {
            let d = quoteParser(v.a);
            expect(d).to.deep.equal(v.b);
        }
    })
})


describe('render', () => {
    it('Should return greetings', () => {

        console.log("")

    })
})


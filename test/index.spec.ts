import { helloWorld } from '../src'
import { expect } from 'chai'
import {Core} from "../index";

describe('helloWorld', () => {
    it('Should return greetings', () => {
        expect(helloWorld()).equals('Howdy!')
    })
})


describe('do render',()=>{
    it('should return h1', function () {
        let core = new Core();
        let t=`# fsdfa`;
        let s = core.render(t);
        console.log(s)
    });
})

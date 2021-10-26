import {Core, helloWorld} from '../src'
import { expect } from 'chai'

describe('helloWorld', () => {
    it('Should return greetings', () => {
        expect(helloWorld()).equals('Howdy!')
    })
})


describe('do render',()=>{
    it('should return h1', function () {
        let core = new Core();

        var t = `
## a
@img
https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F06%2F20200806001606_wwqyy.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637549239&t=a2569b417858e7c4c1cf9e3895dcf9bf
# a
$$
f(x)=\\int_{-\\infty}^\\infty\\widehat f\\xi\\,e^{2\\pi i\\xi x}\\,d\\xi
$$

## asdfa

\`\`\`
public void hello(){
int i=2;
}
\`\`\`


| a | b |
| - | -: |
| a | b |
| a | b |
| a | b |
 `
        let s = core.render(t);
        console.log(s)
    });
})

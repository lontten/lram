import {Lram} from "../src";


const t = `

@img
https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F06%2F20200806001606_wwqyy.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637549239&t=a2569b417858e7c4c1cf9e3895dcf9bf


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
 `;
let core = new Lram();
let s = core.render(t);
console.log(s);
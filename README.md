# lram

### install

```shell
npm i lram
```

### css

```javascript

import 'katex/dist/katex.min.css'
import 'highlight.js/styles/base16/railscasts.css'
import 'bootstrap/dist/css/bootstrap.min.css'

```

### react + func + ts

```jsx

import React, {useEffect, useState} from 'react'
import {lram} from 'lram'
import 'katex/dist/katex.min.css'
import 'highlight.js/styles/base16/railscasts.css'
import 'bootstrap/dist/css/bootstrap.min.css'

type Props = { data: string };

export const Lram = (props: Props) => {
    const [html, setHtml] = useState('')

    useEffect(() => {
        render().then()
    })

    async function render() {
        setHtml(lram.render(props.data))
    }

    return (
        <div className="lram">
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>
    )
}

```

### use Lram

````jsx

let data = `
line
# h1
## h2


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



|  aa | bb | cc |
|-|-:|:-|
| 11 | 222 | 333 |
| xxx | sss | www |


```
public void hello () {
 string str = "hello world !";
}
```

$$
f(x)=\int_{-\infty}^\infty\widehat f\xi\,e^{2\pi i\xi x}\,d\xi
$$


@img
https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F06%2F20200806001606_wwqyy.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637549239&t=a2569b417858e7c4c1cf9e3895dcf9bf


// This is a comment and is not displayed

`


export const App = () => {

    return (
        <Lram data={data}/>
    )
}


````

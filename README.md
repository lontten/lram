# lram

### install
```shell
npm i lram
```

### css
```javascript

import 'katex/dist/katex.min.css'
import 'highlight.js/styles/base16/railscasts.css'


```

### react + func + ts

```jsx

import React, {useEffect, useState} from 'react'
import {lram} from 'lram'
import 'katex/dist/katex.min.css'
import 'highlight.js/styles/base16/railscasts.css'

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

let data=`
line
# h1
## h2

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

`


export const App = () => {
 
    return (
        <Lram data={data}/>
    )
}


````
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

### react + ts + func

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
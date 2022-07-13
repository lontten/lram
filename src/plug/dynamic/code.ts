import {Plug} from "../../model/Parser";
import hljs from 'highlight.js';
import {BaseToken} from "../../model/token/token";
import {codeParser} from "../../utils/codeUtil";

export const codePlug: Plug = {
    code: 's-code',
    parser: codeParser,
    render: [
        {
            code: "s-code",
            subParserType: [],//解析后的数据可被这些类型继续解析
            render: function (t, _ctx, _tran) {
                let token = t as BaseToken
                const highlightedCode = hljs.highlightAuto(token.data).value
                return '<pre><code class="hljs">' + highlightedCode + '</code></pre>'
            },
        }
    ]

};


import {codeParser} from "./codeUtil";
import {test} from "vitest";

test('helloWorld', () => {
    let t = `\`\`\`js
public void hello(){
}
\`\`\`
# aaa`
    let lines = t.trim().split('\n');
    const a = codeParser(lines)
    console.log(a)
})

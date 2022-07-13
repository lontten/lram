import {codeParser} from "./codeUtil";

describe('helloWorld', () => {
    it('Should return greetings', () => {
        let t = `\`\`\`js
public void hello(){
}
\`\`\`
# aaa`
        let lines = t.trim().split('\n');
        const a = codeParser(lines)
        console.log(a)

    })
})

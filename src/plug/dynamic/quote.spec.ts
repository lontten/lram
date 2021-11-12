
describe('helloWorld', () => {
    it('Should return greetings', () => {
        let ha2 = new Ha2('');
        let ha = new Ha('');

        console.log(typeof ha)
        console.log(typeof ha2)

        console.log(ha instanceof Ha2)
        console.log(ha2 instanceof Ha2)
    })
})

class Ha {
    constructor(code :string) {
        this.code=code
    }
    code:string
}

class Ha2 extends  Ha{
    data:string=''
}

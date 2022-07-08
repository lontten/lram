describe('do render', () => {
    it('should return h1', function () {
        let reg = /^(-|1\.|01\.|a\.|A\.|i\.|I\.|cn\.|al\.)\s+(\S+)$/
        reg = /^\.\s+(\S+)$/
        let t = '-   ajlsdfklajfla'
        t = '.   jkljaf'

        let exec = reg.exec(t);
        if (exec == null) {
            console.log('null');
            return
        }

        for (let v of exec) {
            console.log(`=${v}=`);
        }


    });
})

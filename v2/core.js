let p1 = require("./plug/p1");
class Cen {
    pars=[]
    rens=[]

    use(f){
        this.pars.push({
            code:f.code,
            in:f.inLineType,
            fun:f.parser
        })
        f.render.map(r=>{
            this.rens.push(
                {
                    code:r.code,
                    fun:r.fun
                }
            )
        })
    }
}


let cen = new Cen();
cen.use(p1)
console.log(cen)

var s={
    "a":"aa",
    "b":"bb"
}

var b={}
b['a']="akk"
b['b']="bkk"

b.map(k=>{
    console.log(k)
    console.log(b[k])
})

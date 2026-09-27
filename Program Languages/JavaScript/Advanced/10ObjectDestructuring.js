let obj = {a: "one", b: "two"}
let {b,a} = obj // property order doesnt matter
console.log(a,b)

let {c="not undefine"} = obj
console.log(c)

let {a: one} = obj
console.log(one)

let string = "real"
let d
[a,b,c,d] = string
console.log(a+b+c+d)

let arr = ["wow","anjass","Mike Tyson", "Mohammed Ali!!"]

let [aa,bb] = arr
console.log(aa,bb)

// go to subMaterial



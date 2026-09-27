let arr = ["wow","anjass","Mike Tyson", "Mohammed Ali!!"]
let [d,,a,b] = arr
console.log(a, " " + b)

let {[2]:boxerMik,[3]:boxerMoh} = arr
console.log(boxerMik + " ",boxerMoh)

arr = ["wow","anjass","Mike Tyson", "Mohammed Ali!!"]
let [word,,...restIsBoxer] = arr
console.log(restIsBoxer)

let text = ''
arr = new Map([
    ["Mike Tyson",3000],
    ["Mohammed Ali!!",3000]
])

for (let [x,y] of arr) {text += `${x} has damage ${y} \n`}
console.log(text)

// next sub
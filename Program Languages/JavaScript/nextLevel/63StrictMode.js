// "use strict" // strict mode in entire program
function useStrict() {
    "use strict"
    // x = 5 must declaring it
    let x = 5
    // delete x cannot
}

"use strict" // only recognized at the beginning

console.log(typeof r)
delete useStrict // strict cannot

function doubleParam(x, x) {} // strict cannot

let x = 010 // strict cannot
console.log(x)
delete x // strict cannot

x = "\r" // strict cannot

let obj = {}
Object.defineProperty(obj, "x", {value: 0, writable: false})
obj.x = "real" // read-only, strict cannot
console.log(obj.x)

obj = {get x() {return 0}}
obj.x = "wow" // get-only, strict cannot
console.log(obj.x)

delete Object.prototype // undeletable, strict cannot

let eval = "real" // word eval, strict cannot
let arguments = "arguments" // word arguments, strict cannot

with (Math){x = cos(2)}; // with statement, strict cannot
let public = "public" // public word, strict cannot

// html
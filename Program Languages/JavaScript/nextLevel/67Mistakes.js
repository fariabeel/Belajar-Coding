let x
if (x = 1) {console.log("= should be ==")}
console.log(x)

if (x = 0) {console.log("not executed")} else {console.log(false)}
console.log(x)

if (1 == "1") {console.log("worked")} // regular comparison
if (1 === "1") {console.log("not worked")} else {console.log(false)} // strict comparison

switch(1) { // switch use strict comparison
    case "1":
        console.log("running")
        break;
    default:
        console.log(false)
}

console.log(0.1 + 0.2)
console.log((0.1 * 10 + 0.2 * 10) / 10)

let string = 
"real"

// string = "re
// al" cannot

string = "re\
al"
console.log(string)

if (false); {
    console.log("should not worked")
}

let 
variable;

console.log(variable)

function semicolonReturn() {
    return // this things is same with return;
    "wow"
}
console.log(semicolonReturn())

console.log(typeof real === "undefined")
console.log(undefined === "undefined")
// console.log(real !== null) cannot
console.log(typeof real !== "undefined" && real !== null )
let str = "one"
for (let x of str) {console.log(x)}

let arr = [1,2,3,4]
for (let x of arr) {console.log(x)}

let set = new Set(["t","real","jerr"])
for(let x of set) {console.log(x)}

let map = new Map([
    ["bananas",300],
    ["ananasnasdas",1000]
])
for(let x of map) {console.log(x)}

function next() {
    let n = 0
    return {
        next: function() {
            n += 10
            return {value:n, done:false}
        }
    }
}
next().next() // not affecting
let ext = next().next
ext() // 10
console.log(ext()) // 20

let numbre = {}
numbre[Symbol.iterator] = function() {
    let n = 0
    let anjass = false
    return {
        next() { // name must next
            n += 10
            if (n == 100) {anjass = true}
            return {value: n, done: anjass}
        }
    }
}
for (const num of numbre) {
    console.log(num)
}

let iterator = numbre[Symbol.iterator]();
while(true) {
    const input = iterator.next()
    if (input.done) break;
    console.log(input.value)
}

console.log(numbre[Symbol.iterator]().next().value) // {value: n, done: false}
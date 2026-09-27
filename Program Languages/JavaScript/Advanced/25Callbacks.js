let a;
function assign(x) { a = x }

function first() {assign("real")}
function second() {assign("wow")}
first()
second()
console.log(a)

function callbacks(a, func) {
    func(a)
}
callbacks("anjass",assign)
console.log(a)

function removeMinus(array, callback) {
    newArray = []
    for (const x of array) {
        if (callback(x)) {
            newArray.push(x)
        }
    }
    return newArray
}
let array = [1,-1,-2,-3,5,6]
let result = removeMinus(array, x => x >= 0 ) // callback function
console.log(result)
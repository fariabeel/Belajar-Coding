let func = (a = 2) => a**a
console.log(func(3))

// rest parameter
let sum = (...args) => {
    let sum = 0
    for (let arg of args) sum += arg
    return sum
}
console.log(sum(1,2,3,4,2,2))

function argumentsObject() {
    let max = -Infinity
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max) {max = arguments[i]}
    }
    return max
}
console.log(argumentsObject(234,24,24,243,525))

func = function(a) {return a*arguments[1]} // a takes first argument
// arrow function cannot use arguments keyword
console.log(func(43,2))
console.log(func(2,2,1000))
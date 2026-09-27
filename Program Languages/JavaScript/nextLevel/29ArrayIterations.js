[1,2].forEach(() => {console.log("looping")})

let arr = [1,2,3,4,5,6]
arr.forEach((value, index, array) => {
    if (value == 1) {console.log(array)}
    console.log(`${index} ${value}`)
})

console.log([1,2,3].map(x => x**25)) // also val, index, arr parameter

// x == 0 ? true:  possible

console.log([1,2,3].flatMap(x => [x, "walawe", x**2]))
console.log([1,2,3].filter(x => x > 2)) // val, index, arr

console.log([1,2,3].reduce((total, value) => total + value))

console.log([1,2,3].reduce((total, value, index, array) => {
    if (value == array[1]) {console.log(array)}
    console.log(`${total} + ${value} ${index}`)
    return total + value
}))

console.log([1,2,3].reduce((total, value)=> total + value, 100))

console.log([1,2,3].reduceRight((total, value) => total + value)) // total, value, index, array

arr = [1,2,3]
arr.reduceRight((total, value, index) => {
    console.log(`${total} + ${value} ${index}`)
    return total + value
})

console.log([1,2,3,4,5].every(x => x > -1)) // val, index, arr
console.log([1,2,3,4,5].some(x => x == 5))

let string = "wow"
console.log(Array.from(string))

arr = [1,2,3]
console.log(Array.from(arr, x => x**25))

console.log(Array.from(arr.keys())) // arr.keys() return object indexes
// console.log(arr.keys()) logs object

console.log(Array.from(arr.values())) // return object too
console.log(Array.from(arr.entries()))

console.log([1,2,3].with(1, "real")) // changing index 1 value

let arr1 = [1,2,3]
let arr2 = [4,5,6]
arr = [...arr1, ...arr2]
console.log(arr)

arr2 = [...arr1]
console.log(arr2)

console.log(Math.max(...arr)) // or Math.min()

let a, rest
arr = [1,2,3,4,5]; // must semicoloned cuss let
[a, ...rest] = arr
// [1, ...rest] cannot
console.log(rest)  

let b
arr = [1,2,3,4,5];
[a, b, ...rest] = arr
console.log(rest)  

arr = [1,2,3,4,5,6,7]
let c,d,e
[a,b,c,d,e, ...rest] = arr
console.log(rest)  
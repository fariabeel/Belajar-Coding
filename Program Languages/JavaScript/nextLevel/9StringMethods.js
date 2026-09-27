// String > String Methods
console.log("hello".length)
console.log('hello'.charAt(1))
console.log('hello'.charCodeAt(1)) // return UTF-16 code
console.log('hello'.codePointAt(1)) // return UTF-16 code
console.log('hello'.at(1))
console.log('hello'.at(-1))

let a = "hello"
const b = "za"
const c = "warudo!!"
let concated = a.concat(" ", b, " ", c)
console.log(concated)

concated = "hello za warudo!!"
console.log(concated.slice(9,16))
console.log(concated.slice(6))
console.log(concated.slice(-8, -1))
console.log(concated.substring(6, 16))
console.log(concated.substring(-10, 16))
console.log(concated.substring(6))
console.log(concated.substr(6, 10)) // deprecated
console.log(concated.substr(2))
console.log(concated.substr(-8))
console.log(concated.toUpperCase())
console.log(concated.toLowerCase())
console.log(concated.isWellFormed())
concated = "Hello world \uD800"
console.log(concated.isWellFormed())
console.log(concated.toWellFormed())

let string = "   Hello world   "
console.log(string.trim() + "a")
console.log(string.trimStart() + "a")
console.log(string.trimEnd() + "a")

string = "1"
console.log(string.padStart(4, "_"))
console.log(string.padEnd(4, "_"))

concated = "hello world "
console.log(concated.repeat(3))
console.log(concated.replace("world", "za warudo!!")) // case sensitive
console.log(concated.replace(/WORLD/i, "za warudo!!"))

concated = "world world world"
// this method does not change the variable
console.log(concated.replace("world", "za warudo!!"))
console.log(concated.replace(/world/g, "za warudo!!"))
console.log(concated.replaceAll("world", "the world"))
console.log(concated.replaceAll(/world/g, "the world"))

concated = "world world world"
let array = concated.split(" ")
console.log(array)
array = concated.split()
console.log(array)
array = concated.split("")
console.log(array)
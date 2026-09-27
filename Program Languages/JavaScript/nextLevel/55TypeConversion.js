console.log(Number(" "))
console.log(Number(""))
console.log(Number("23"))
console.log(Number("2.3"))
console.log(Number("2 3"))

let str = "2"
let num = + str
console.log(typeof num)
console.log(num + 2)

str = "real"
num = + str
console.log(typeof num)
console.log(num + 2)

console.log(String(123))

console.log(Number(new Date()))
console.log(new Date().getTime())

console.log(String(Date()))
console.log(Date().toString())

console.log(Number(false) + " " + Number(true))

console.log(String(false))
console.log(false.toString())

console.log(5 + null)
console.log("5" + null)
console.log("5" + 2)
console.log("5" - 2)
console.log("5" * "2")

console.log(Boolean("0"))
console.log(Boolean([]))
console.log(Boolean(-1))

console.log(Number([]))
console.log(Number([1]))
console.log(Number([1,2]))

console.log(Number(null))
console.log(Number(undefined))

//html
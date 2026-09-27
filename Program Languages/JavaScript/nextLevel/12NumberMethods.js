let x = 1
console.log(x.toString())
console.log((1).toString())
console.log((12 + 1).toString())
console.log((123).toString(2))

x = 2.123
console.log(x.toExponential(2))
console.log((2.123).toExponential(3))
console.log((2.123).toExponential(4))
console.log((2.123).toExponential())

console.log((2.12312).toFixed(1))
console.log((2.6).toFixed(0))
console.log((2.8).toFixed(10))
console.log((2.8).toFixed(50))
console.log((2.8).toFixed())

console.log((2.123).toPrecision(1))
// console.log((2.123).toPrecision(0)) cannot
console.log((2.123).toPrecision(10))
console.log((2.123).toPrecision(50))
console.log((2.123).toPrecision())
console.log((2.6).toPrecision())

// new Number(1).valueOf() <-- the uses
console.log((2).valueOf())
console.log((2+2).valueOf())

console.log(Number(true))
console.log(Number(false))
console.log(Number("12"))
console.log(Number(" 12"))
console.log(Number("12 "))
console.log(Number("12.1"))
console.log(Number("12,1"))
console.log(Number("12 1"))
console.log(Number("Anjas"))
console.log(Number(new Date("2025-10-25")))
console.log(Number(new Date("1970-01-01")))

console.log(parseInt(true))
console.log(parseInt(false))
console.log(parseInt("12"))
console.log(parseInt(" 12"))
console.log(parseInt("12 "))
console.log(parseInt("12.1"))
console.log(parseInt("12,1"))
console.log(parseInt("12 1 3"))
console.log(parseInt("1 3 12"))
console.log(parseInt("12 Anjas"))
console.log(parseInt("Anjas 12"))

console.log(parseFloat(true))
console.log(parseFloat(false))
console.log(parseFloat("12"))
console.log(parseFloat(" 12"))
console.log(parseFloat("12 "))
console.log(parseFloat("12.1"))
console.log(parseFloat("12,1"))
console.log(parseFloat("12 1 3"))
console.log(parseFloat("1 3 12"))
console.log(parseFloat("12 Anjas"))
console.log(parseFloat("Anjas 12"))

x = 10
// console.log(x.isInteger()) cannot
console.log(Number.isInteger(30))
console.log(Number.isInteger(30.2))
console.log(Number.isInteger(x))

console.log(Number.isFinite(30))
console.log(Number.isFinite(1 / 0))
console.log(Number.isFinite(-1 / 0))
console.log(Number.isFinite("anjas"))

console.log(Number.isNaN(1))
console.log(Number.isNaN("1"))
console.log(Number.isNaN(1 + "wow")) // it's string
console.log(Number.isNaN(1 - "wow"))
console.log(NaN == NaN)
console.log(Number.isNaN(NaN)) // better way

2 ** 53 - 1 // safe integer, above isn't
-2 ** 53 - 1 // safe integer, below isn't
// values outside this range lose precision
console.log(Number.isSafeInteger(102))
console.log(Number.isSafeInteger(9007199254740992))

console.log(Number.parseFloat(true))
console.log(Number.parseFloat(false))
console.log(Number.parseFloat("12"))
console.log(Number.parseFloat(" 12"))
console.log(Number.parseFloat("12 "))
console.log(Number.parseFloat("12.1"))
console.log(Number.parseFloat("12,1"))
console.log(Number.parseFloat("12 1 3"))
console.log(Number.parseFloat("1 3 12"))
console.log(Number.parseFloat("12 Anjas"))
console.log(Number.parseFloat("Anjas 12"))

// Number.parseFloat/Int same as parseFloat/Int

console.log(Number.parseInt(true))
console.log(Number.parseInt(false))
console.log(Number.parseInt("12"))
console.log(Number.parseInt(" 12"))
console.log(Number.parseInt("12 "))
console.log(Number.parseInt("12.1"))
console.log(Number.parseInt("12,1"))
console.log(Number.parseInt("12 1 3"))
console.log(Number.parseInt("1 3 12"))
console.log(Number.parseInt("12 Anjas"))
console.log(Number.parseInt("Anjas 12"))
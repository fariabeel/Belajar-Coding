console.log("realme".search(/real/i))
console.log("realme".replace(/realme/i,"normie")) // replaceAll cannot
console.log("aaa".replace(/a/g, "b"))
console.log("realme".match(/real/i))
console.log("abcde".match(/a|b|f/g))

let patern = /a/g
console.log("aaa".match(patern))

console.log('a3t43%'.match(/\d/g)) // digit only
console.log('a3 t43%'.match(/\w/g)) // number and latin
console.log('a3 t43%'.match(/\s/g)) // symbol
// space is symbol

console.log("1 10 100 1000".match(/10?/g))
console.log("1 10 100 1000".match(/100?/g))

console.log("arealme".match(/^are/)) // match the beginning
console.log(/^are/.test("arealme"))

console.log("arealme".match(/me$/)) // match the end
console.log(/me$/.test("arealme"))

console.log("34jg5l34oi5h".match(/[0-9]/g))
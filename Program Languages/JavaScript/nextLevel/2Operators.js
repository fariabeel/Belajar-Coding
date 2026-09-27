let x = 0
x += 4
x--
x--
x++
x *= 3
console.log(x)

console.log(4 == 4) // regular comparison
console.log(4 === 4) // strict comparison. learn 67 to know more bout this
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 <= 4)
console.log(4 >= 4)

console.log( true && true)
console.log( true || false)
console.log(Math.pow(2, 3)) // 2 ** 3

let truth = true
console.log(truth &&= false)
console.log(truth ||= false)

let undef;
console.log(undef ??= 10) // if undefined is assinging

undef = 1 // defined
console.log(undef ??= "undefined before")

let mathing = '123456'
console.log(Math.min(...mathing)) // spread operator
console.log(Math.max(...mathing))
console.log(new Date().getDay()) // takes today value
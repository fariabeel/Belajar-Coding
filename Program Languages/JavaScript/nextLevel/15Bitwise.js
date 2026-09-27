// 00000000000000000000000000000101 (5) JavaScript uses 32 bits
// 11111111111111111111111111111010 (~5 = -6)
console.log(~5)

// javascript bitwise have similar operator with python
console.log(1<<2)
console.log(1>>1)

console.log(2>>>2) // >>> (zero fill) same with >>

let x = 1
x <<= 10
console.log(x)
x >>=2
console.log(x)
x >>>=2
console.log(x)
x = 3
x &= 1
console.log(x)
x ^= 1
x |= 1

// converting
console.log((5).toString(2))
console.log(parseInt(101, 2).toString(10)) // too long
console.log(parseInt(101, 2)) // more short
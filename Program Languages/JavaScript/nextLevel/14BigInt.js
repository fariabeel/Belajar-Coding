let x = 999999999999999;
let y = 9999999999999999;

console.log(`${x} ${y}`)
y=9999999999999999n
stringY= "9999999999999999" 
console.log(`${y} ${BigInt(stringY)}`)
console.log(typeof y)
console.log(y * y)
// console.log(1n + 2) not allowed
console.log(1n + 2n)
console.log(Number(1n) + 2)

let numeric = 256n;
let octal = 0o400n;
let hexadecimal = 0x100n;
let binary = 0b100000000n;
console.log(`${numeric} ${octal} ${hexadecimal} ${binary}`)
console.log(9007199254740992 === 9007199254740993)
console.log(9007199254740992n === 9007199254740993n)
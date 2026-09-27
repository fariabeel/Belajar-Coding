let x = 2.12
let w = 123e3
let r = 123e-3
console.log(`${w} ${r}`)

let maximum = 999999999999999
let maxed = 9999999999999999    
console.log(maximum)
console.log(maxed)

let maximumX2 = 99999999999999999
let maxedX2 = 999999999999999999 // not work
console.log(maximumX2)
console.log(maxedX2)

console.log(0.1 + 0.2) // not always accurate
console.log((0.1 * 10 + 0.2 * 10) / 10)

let stringNum = 12
let thisstring = "string is "
console.log(thisstring + stringNum)
console.log(thisstring + stringNum + 10)

let numstring = "11";
let plusstring = "3";
console.log(`${numstring + plusstring}+ ${numstring - plusstring}- ${numstring * plusstring}* ${numstring / plusstring}/`)

let theNaN = 1 / "anjas"
console.log(theNaN)
console.log(isNaN(theNaN))
console.log(NaN + 1)
console.log(NaN + "stringer")
console.log(typeof NaN)

let myNum = 2
while (myNum != Infinity) {
    myNum = myNum * myNum
    console.log(myNum)
}

console.log(`${-1/0} ${1/0}`)
console.log(typeof Infinity)

x = 0xFF;
console.log(x)

myNumber = 32
console.log(
"Decimal 32 = " + "\n" + 
"Hexatrigesimal (base 36): " + myNumber.toString(36) + "\n" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "\n" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "\n" +
"Duodecimal (base 12): " + myNumber.toString(12) + "\n" +
"Decimal (base 10): " + myNumber.toString(10) + "\n" +
"Octal (base 8): " + myNumber.toString(8) + "\n" +
"Binary (base 2): " + myNumber.toString(2)
)

// let object = new Number(3)


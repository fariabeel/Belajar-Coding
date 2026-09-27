console.log(new Date("2000-12"))
console.log(new Date("2000"))
console.log(new Date("2005-12-01T12:00:42Z"))
console.log(new Date("2005-12-01T12:00:42+05:30"))
console.log(new Date("2005-12-01T12:00:42-05:30"))
// Date and time is separated with a capital T.
// UTC time is defined with a capital letter Z.

console.log(new Date("2005-12-01T12:00:42"))
// no defined time zone

// In some browsers, months or days with no leading zeroes may produce an error
console.log(new Date("2024/12/2"))
// The behavior of "YYYY/MM/DD" is undefined.
// Some browsers will try to guess the format. Some will return NaN.

console.log(new Date("2024-12-2"))
// The behavior of  "DD-MM-YYYY" is also undefined.
// Some browsers will try to guess the format. Some will return NaN.

console.log(new Date("Dec 2 2024"))
console.log(new Date("2 Dec 2024"))
console.log(new Date("2 December 2024")) 
console.log(new Date("2, Dec, 2024"))
console.log(new Date("2, DEC. 2024"))
console.log(new Date("2 Deczz 2024"))
console.log(new Date("2 Dec 2024zz"))
// console.log(new Date("2zz Dec 2024")) invalid date

console.log(Date.parse("dec 2 2024"))
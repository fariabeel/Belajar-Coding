let nowadays = new Date()
let customTime = new Date("1999-01-12")
console.log(nowadays)
console.log(customTime)
console.log(nowadays.getFullYear()) 
console.log(nowadays.getMonth())
console.log(nowadays.getDate())
console.log(nowadays.getHours()) // returns number 0-23
console.log(nowadays.getMinutes()) // return number 0-59 and so on
console.log(nowadays.getSeconds())
console.log(nowadays.getMilliseconds())

// 9 ways creating date object
console.log(new Date()) // current time
console.log(new Date("December 18, 1898 11:11:56:999")) // set milliseconds to 1000 the seconeds will be 57. applies to other
console.log(new Date("0003-11-16"))
console.log(new Date(2000, 11, 1, 10, 10, 10, 100)) // years, month, date, hours, minutes, seconds, milli
console.log(new Date(2000, 0, 1, 10, 10, 10, 100)) // 0 means january. 0-11
console.log(new Date(2000, -1, 1, 10, 10, 10, 100)) // the month
console.log(new Date(2000, 14, 1, 10, 10, 10, 100)) // the month
console.log(new Date(2000, 0, 32, 10, 10, 10, 100)) // date
console.log(new Date(2000, 0, 1, 31, 10, 10, 100)) // hours
console.log(new Date(2000, 0, 1, 10, 61, 10, 100)) // minutes
console.log(new Date(2000, 0, 1, 10, 10, 61, 100)) // seconds
console.log(new Date(2000, 0, 1, 10, 10, 10, 1000)) // milli

console.log(new Date(999)) // milliseconds
console.log(new Date(23, 12)) // 1923
console.log(new Date(1, 12)) // 1901

// JavaScript stores dates as number of milliseconds since January 01, 1970.
console.log(new Date(0))

console.log((new Date()).toDateString())
console.log((new Date()).toUTCString())
console.log((new Date()).toISOString())

//html
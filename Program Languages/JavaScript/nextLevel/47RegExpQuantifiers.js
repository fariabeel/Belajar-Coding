console.log("ree reeee".match(/re+/g))
console.log("ree reeee".match(/e+/g))
console.log("ree red rr".match(/re*/g))
console.log("10 100 1000 11".match(/10?/g))
console.log("1000 1000000 10".match(/\d{4}/g))
console.log("1000 10 100 100000".match(/\d{3,5}/g)) // 3 - 5 digits. /\d{5,3}/g cannot
console.log("10 100 1000 10000".match(/\d{3,}/g)) // 3 or above
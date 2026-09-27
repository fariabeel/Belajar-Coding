console.log(Math.random()) // not returning 1 (0 - < 1)
console.log(Math.random() * 1.1) // able to return 1 (0 - 1)
console.log(Math.random() * 101) // able to return 100 (0 - 100)
console.log(Math.floor(Math.random() * 100) + 1) // returning 1 - 100
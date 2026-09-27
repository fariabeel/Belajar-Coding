// new Date().setFullYear() cannot
let d = new Date()
d.setFullYear(1888)
console.log(d)

d.setFullYear(2000, 11, 1) // 11 is december
console.log(d)

d.setMonth(3)
console.log(d)

d.setDate(20)
d.setHours(12)
d.setMinutes(59)
d.setSeconds(59)
console.log(d)

let now = new Date()
console.log(now > d)
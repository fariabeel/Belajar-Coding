// Date Object
console.log(new Date())
console.log(new Date().getTime())

let month = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
console.log(month[new Date().getMonth()])
console.log(month[new Date("2005-04-12").getMonth()])

console.log(new Date().getDay()) // sunday is 0

console.log(Date.now())

let year = 1000*60**2*24*365
console.log(Math.round(Date.now() / year))

let myDate = new Date()
// myDate.now() cannot

console.log(new Date().getUTCFullYear())
console.log(new Date().getUTCMonth())
console.log(new Date().getUTCDate()) // and so on

console.log(new Date().getTimezoneOffset())
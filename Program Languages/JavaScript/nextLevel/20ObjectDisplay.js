let obj = {a: 1, b: 2, c: 3}
for (let key in obj) {
    console.log(obj[key]) // obj.key not work
}

console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

let arr = []
for (let [key, value] of Object.entries(obj)) {
    arr.push(value)
    arr.length == 3 ? console.log(arr) : null
}

console.log(JSON.stringify(obj))
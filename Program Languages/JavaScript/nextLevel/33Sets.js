console.log(new Set(["a","b","c"]))

let arr = new Set(["a","b","c"])
arr.add("d")
console.log(arr)

let adding = "e"
arr.add(adding)
console.log(arr)

arr.add("a") // only store unique values
console.log(arr)

console.log(arr.size)

let string = ""
for (const x of arr) {
    string += x
}
console.log(string)

console.log(typeof arr)
console.log(arr instanceof Set)
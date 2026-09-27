let set = new Set([1,2,3]).add(4)
console.log(set)
console.log(set.size)
console.log(set.has(3))

let inp = []
set.forEach (x => inp.push(x))
console.log(inp)

set = new Set(["a","b","c"])
console.log(set.values())
console.log(set.keys()) // no keys
console.log(set.entries()) // [value, value]
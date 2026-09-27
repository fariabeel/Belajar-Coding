let map = new Map([
    ["a",1],
    ["b",2],
    ["c",3]
])

console.log(map) // keys => values
console.log(map.get("a"))

map.set(1, "real")
// map.set(a, 100) cannot
console.log(map)
console.log(map.get(1))
map.set("a", "changed")
console.log(map)

console.log(typeof map)
console.log(map instanceof Map)

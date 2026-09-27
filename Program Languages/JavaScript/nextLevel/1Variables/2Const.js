// const phi; error
const phi = 3.14; // must be initialized

const array = ["a", "b", "c"]
array[0] = "x"
array.push("d")
// array = ["x", "y"] error
console.log(array)

const obj = { x: 1, y: 2 }
obj.x = 3
obj.y = 4
console.log(obj)

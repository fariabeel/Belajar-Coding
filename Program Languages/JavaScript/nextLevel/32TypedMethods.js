console.log(Int16Array.from([1,2,3]))
console.log(Int16Array.from("123"))
console.log(Int16Array.of(1,2,3))

let arr = new Int32Array(5)
console.log(arr.constructor.name)
console.log(arr.BYTES_PER_ELEMENT)

arr.fill(3)
console.log(arr)
arr.fill(5,1,4)
console.log(arr)

console.log(arr.find(x => x > 3))
console.log(arr.some(x => x == 3))
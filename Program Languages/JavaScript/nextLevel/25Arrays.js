let arr = ["real",true,2]
arr = [
    "real",
    true,
    2
]

// common practice array with const
const arrays = []
arrays[0] = 1 // changable
console.log(arrays[0])

arrays[2] = 1
arrays.push("real")
console.log(arrays)

console.log(new Array(1,2,3)) // no need to use
console.log(arrays.toString())
console.log(typeof arrays)

arr = [(a) => {console.log(a)}, [1,2,3], {character: "lewis"}]
// 
arr[0](arr[1])
arr[0](arr[2].character)

arr = [10,4,2,6]
console.log(arr.sort()) // it's uses for string in array ["a","b"]
arr.push("real")
console.log(arr)
arr[arr.length] = "new"
console.log(arr)

arr.real = "real"
arr["wow"] = "wow"
console.log(arr)
console.log(arr[0])

arr = []
arr[0] = 0
arr.real = "real"
console.log(arr)
console.log(arr.length) // cuss arr.real is object so didn't count as element
console.log(arr[0])
console.log(arr[1])

arr = []
arr["real"] = "real"
console.log(arr.length)
arr[1] = 1
console.log(arr)

console.log(new Array(1))

console.log(Array.isArray(arrays))
console.log(arrays instanceof Array)

const object = {array: [1,2,3]}
console.log(object.array[0])

arr = [1, {object: "object"}]
console.log(arr[1].object)
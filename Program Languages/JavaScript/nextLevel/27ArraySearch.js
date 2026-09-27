let arr = [12,32,53,24,0,32,NaN]
console.log(arr.indexOf(32))
console.log(arr.indexOf(32,2)) // start searching from index 2
console.log(arr.indexOf(3))

console.log(arr.lastIndexOf(32))
console.log(arr.lastIndexOf(32, 1))

console.log(arr.includes(12))
console.log(arr.find((value, index, array) => value > 12)) // return first value that pass
// console.log(arr.find((value, index, array) => {return `${value > 12} ${index} ${array}`})) cannot

console.log(arr.findIndex((value, index, array) => value > 12))
function arrFind() {
    let bool = []
    arr.findIndex((value, index, array) => {
        bool.push(value > 12) // no return to work ass expected
    })

    let result = ""
    for (let i = 0; i < bool.length; i++) {
        result += " " + bool[i] + " "
        result += i + " "
        result += arr[i] + " " + "|"
    }

    // bool, index, value
    console.log(result)
}
arrFind()

arr = [10,32,12,32]
console.log(arr.findLast(x => x < 32 ))


let arr = ["b", "e", "c","d","a"]

arr.sort()
console.log(arr)

arr.reverse()
console.log(arr)

console.log(["b", "e", "c","d","a"].toSorted())
console.log([ 'a', 'b', 'c', 'd', 'e' ].toReversed())

arr = [5,9,1,4,2,8,3,7,6] // 1 till 9 can sorted but adding 10 and so on cannot
arr.sort()
console.log(arr)

arr = [5,9,1,4,2,8,3,7,6]
arr.sort((a,b) => a - b)
console.log(arr)

console.log([5,9,1,4,2,8,3,7,6].toSorted(function(a,b) {return b - a}))

arr = [5,9,1,4,2,8,3,7,6]
arr.sort(function(a,b) {console.log(`${b} - ${a} = ${b - a}`)})

console.log([5,9,1,4,2,8,3,7,6].sort(() => 0.5 - Math.random()))

arr = [5,9,1,4,2,8,3,7,6]

for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let k = arr[i]
    arr[i] = arr[j]
    arr[j] = k
}
console.log(arr)

function veryMin(arr) {
    console.log(Math.max.apply(null, arr))
    // console.log(Math.min.apply(null, arr))
}
veryMin(arr)

// console.log(Math.min(arr)) NaN
console.log(...arr)
console.log(Math.max(...arr))

function myArrMin(arr) {
    let len = arr.length
    let min = Infinity
    while (len--) {
        if (arr[len] < min) {
            min = arr[len]
    }}
    return min
}

function myArrMax(arr) {
    let len = arr.length
    let max = -Infinity
    while (len--) {
        if (arr[len] > max) {
            max = arr[len]
    }}
    return max
}

let object = [{name: "sin", id: 2}, {name: "philips", id: 3}, {name: "alice", id: 1}]
object.sort( (a,b) => a.id - b.id)
console.log(object)

object.sort( ( a, b ) => {
    let x = a.name
    let y = b.name
    if (x < y) {return 1}
    if (x > y) {return -1}
    return 0
})

console.log(object)
let iterator = Iterator.from([1,2,3]) // Iterator with capital not iterator
for (const x of iterator) {console.log(x)}

iterator = Iterator.from([1,2,3])
console.log(iterator[Symbol.iterator]().next().value)
console.log(iterator[Symbol.iterator]().next().value)
console.log(iterator[Symbol.iterator]().next().value)
console.log(iterator[Symbol.iterator]().next().value)

for (const x of Iterator.from([19,42,22,25,52,1,6,7,55,2,6,2,9]).filter(x => x > 25)) {
    console.log(x)
}

iterator = Iterator.from("1234567890")

console.log(iterator.map(x => x**2)[Symbol.iterator]().next().value) // 1**1 = 1
// continue from index 2
for (const x of iterator.map(x => x**2)) { // 1**1 is executed before
    console.log(x)
}

iterator = Iterator.from([1,2,3,4,5,6,7,8,9,0]) // must reassign to use again
for (const x of iterator.flatMap(x => [x, x**2])) {
    console.log(x)
}

iterator = Iterator.from([1,2,3,4,218934983,6,7,8,9,0])
for (const x of iterator.take(5)) { // break at index 5
    console.log(x)
}

iterator = Iterator.from([1,2,3,4,218934983,6,7,8,9,0])
for (const x of iterator.drop(5)) { // skip 5 index
    console.log(x)
}

iterator = Iterator.from([1,2,3,4,218934983,6,7,8,9,1000])
console.log(iterator.find(x => x>10))

iterator = Iterator.from([1,2,3,4,5,6,7,8,9,0])
console.log(iterator.reduce((total,add) => total + add))
console.log(iterator.every(x => x>1)) // value uses to be false
console.log(iterator.some(x => x==0)) // uses to be true

// solution is reassign
iterator = Iterator.from([1,2,3,4,5,6,7,8,9,0])
console.log(iterator.reduce((total,add) => total + add))

iterator = Iterator.from([1,2,3,4,5,6,7,8,9,0]) 
console.log(iterator.every(x => x>1))

iterator = Iterator.from([1,2,3,4,5,6,7,8,9,0])
console.log(iterator.some(x => x==0))

iterator = Iterator.from([1,2,3,4,5,6,7,8,9,0])
iterator.forEach(x => console.log(x))
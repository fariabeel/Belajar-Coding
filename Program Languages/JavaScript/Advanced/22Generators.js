function* streaming() {
    yield 1; // {value: 1, done: false}
    yield 2; // {value: 2, done: false}
    return 3 // {value 3, done: true}
}
let stream = streaming()
console.log(stream[Symbol.iterator]().next())
console.log(stream[Symbol.iterator]().next())
console.log(stream[Symbol.iterator]().next())

stream = streaming()
for (let x of stream) {
    console.log(x)
}

function* letItClear() {
    yield 1;
    yield 2;
    yield 3;
}
for (let x of letItClear()) {
    console.log(x)
}

stream = letItClear()
console.log(stream[Symbol.iterator]().next())
console.log(stream[Symbol.iterator]().return()) // finishing the execution
console.log(stream[Symbol.iterator]().throw()) // dont know the use
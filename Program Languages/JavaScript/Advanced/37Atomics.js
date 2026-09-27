let buffer = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT);

let sharedArray = new Int32Array(buffer)

sharedArray[0] = 10;
sharedArray[1] = 20;
sharedArray[2] = 30;
sharedArray[3] = 40;

console.log(sharedArray)

Atomics.store(sharedArray, 0, 123)

var value = Atomics.load(sharedArray, 0)

console.log(value)

buffer = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT)
sharedArray = new Int32Array(buffer)
sharedArray[0] = 5

var oldValue = Atomics.add(sharedArray, 0, 3)

console.log(oldValue, sharedArray[0])

sharedArray[0] = 10

var oldValue = Atomics.sub(sharedArray, 0, 4)
console.log(oldValue, sharedArray[0])

sharedArray[0] = 1
var oldValue = Atomics.exchange(sharedArray, 0, 99)

console.log(oldValue, sharedArray[0])

sharedArray[0] = 10
var oldValue = Atomics.compareExchange(sharedArray, 0, 10, 20)
console.log(oldValue, sharedArray[0])

sharedArray[0] = 11
var oldValue = Atomics.compareExchange(sharedArray, 0, 10, 20)
console.log(oldValue, sharedArray[0]) // not affected
// html

// not working :(
// buffer = new SharedArrayBuffer(4)
// sharedArray = new Int32Array(buffer)

// sharedArray[0] = 0

// var worker = new Worker("Worker.js");

// worker.postMessage(buffer)

// setTimeout(function() {
//     Atomics.store(sharedArray, 0, 1)
//     Atomics.notify(sharedArray, 0, 1)
// }, 1000)
// worker file
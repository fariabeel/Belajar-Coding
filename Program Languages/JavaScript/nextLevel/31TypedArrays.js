// typed Array is not array

console.log(new Uint8Array(2))
console.log(new Uint8Array([1,2,3]))
console.log(Uint8Array.of(1,2,3))
console.log(Uint8Array.from([1,2,3]))
console.log(new Int8Array(1))
console.log(new Uint8ClampedArray(2))
console.log(new Int16Array(2))
console.log(new Uint16Array(2))
console.log(new Int32Array(1))
console.log(new Uint32Array(1))
console.log(new BigInt64Array(1))
console.log(new BigUint64Array(1))
// console.log(new Float16Array(1)) not supported
console.log(new Float32Array(1))
console.log(new Float64Array(1))
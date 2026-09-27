console.log(typeof true)
console.log(typeof null)

console.log(typeof function() {}) // typeof () => {} cannot

console.log(typeof new Map())
console.log(typeof new Set())
console.log(Array.isArray(new Array()))
console.log(new Date() instanceof Date)
console.log(new Map([]) instanceof Map)
console.log(new Set([]) instanceof Set)
console.log(typeof x)
console.log(typeof "")

console.log({}.constructor)
console.log([].constructor)
console.log(new Date().constructor)
console.log(new Set().constructor)
console.log(new Map().constructor)
console.log(function(){}.constructor)

console.log([].constructor == Array)
console.log(NaN.constructor == Number)
// html
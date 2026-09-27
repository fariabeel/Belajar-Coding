const constObj = {a: "wi"} // a good way to protect the existence of object
constObj.a = "real"

Object.preventExtensions(constObj) // prevents adding properties
constObj.b = 1 // fail silently
console.log(constObj.b)

const constArr = [1,2,3]
constArr.push("wow")
console.log(constArr)

Object.preventExtensions(constArr)
try {constArr.push(5,6,7)}
catch (err) {console.log(err.message)} // property 4 means index 4

console.log(Object.isExtensible(constArr))

let arr = []
console.log(Object.isExtensible(arr)) // applies to Object too. i mean {}

let obj = {a: "undeletable"}
Object.seal(obj) // cannot add and delete can change
delete obj.a // fail silently. strict mode will throw error
console.log(obj.a)

arr = ["undeletable"]
Object.seal(arr)
try {arr.shift()}
catch (err) {console.log(err.message)}

console.log(Object.isSealed(arr)) // applies to object

obj = {a: "freeze!!"} // absolutely uneditable
Object.freeze(obj)
obj.a = "unfreeze it" // fail silently
console.log(obj)

arr = ["freeze!!",1]
Object.freeze(arr)
try {arr.push("editable?")}
catch (err) {console.log(err.message)}

console.log(Object.isFrozen(arr))

// Object.preventExtensions()
// Object.isExtensible()
// Object.seal()
// Object.isSealed()
// Object.freeze()
// Object.isFrozen()
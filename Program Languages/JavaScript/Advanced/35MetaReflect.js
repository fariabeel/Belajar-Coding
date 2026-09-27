let obj = {a: "real", b: 1, c: 1+1, d: "this is D"}

let ans = Reflect.has(obj, "a") // same with in
console.log(ans)
console.log("b" in obj)

Reflect.deleteProperty(obj, "a") // same with delete
console.log(obj.a)
delete obj.a

console.log(Reflect.deleteProperty(obj, "a"))

console.log(Reflect.get(obj, "b")) // same as obj.b

Reflect.set(obj, "wuw",321) // same as obj.wuw = 321
console.log(obj)

function greet(msg) {
    // console.log(this.c) // ctrl + / to test it
    return msg + `, ${this.d}`
}

let message = Reflect.apply(greet, obj, ["wow"]) // same as func.apply()

console.log(message)

let messacre = greet.apply(obj, ["XD"])
console.log(messacre)

let arr = Reflect.construct(Array, ['ba',"what","the","hell","dawg"]) // same as new keyword
console.log(arr)

arr = new Array('ba',"what","the","hell","dawg")

let set = Reflect.construct(Set, [[1,2,3]]) // new set([1,2,3])
console.log(set)

let num = Reflect.construct(Number, [243]) // new Number(243)
console.log(num)

obj = {}

Reflect.defineProperty(obj, "nah", { // Object.defineProperty()
    value: "I would win",
    writable: false
})

console.log(obj) // not visible
console.log(obj.nah)

// Reflect.defineProperty() must be used in Proxy

// If used in a Proxy, the defineProperty trap must return true or false.

// Object.defineProperty() returns the target object
// Reflect.defineProperty() returns true or false

sym = Symbol("secret")
obj = {anjas: "this is A", [sym]: "real"}

let keys = Reflect.ownKeys(obj) // almost same as Object.keys(obj)
console.log(keys)

let add = ""
keys.forEach(keyFunc)

function keyFunc(val, index, arr) {
    let type = typeof arr[index]
    add += type + " "
    if (type != "symbol" ) { add += val + ", " }
    else { add += "secret"; console.log(val)}
}

console.log(add)

obj = {}

console.log(Reflect.isExtensible(obj))
console.log(Object.isExtensible(obj))

// console.log(Reflect.isExtensible(1)) error
console.log(Object.isExtensible(1)) // throw false
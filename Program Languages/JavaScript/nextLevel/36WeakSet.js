// let set = new WeakSet({a: "real"}) cannot
let set = new WeakSet() // the value must object (next material)
set.add({a: "real"}) // use variable to add (next material)
console.log(set.has({a: "real"})) // use variable to use method (next material)

let obj = {a: "real"}
set.add(obj)
console.log(set.has(obj))
set.delete(obj)
console.log(set.has(obj))

function tracking(obj) {
    if (set.has(obj)) {console.log(`${obj.word} used`)} // has() set method
    else {set.add(obj); console.log(`${obj.word} added`)}
}


let word = {word: "hello"}
let word0 = {word: "weebs"}
let word0r = {word: "weebs"}
tracking(word0)
tracking(word)
tracking(word0)
tracking(word0r)

word = null // removed from memory. garbage collected
console.log(set.has(word))

// weakset cannot iterate, not enumerable, no size property
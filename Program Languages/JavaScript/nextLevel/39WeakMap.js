let weakMap = new WeakMap() // the value must object (next material)
let obj = {name: "gus"}
weakMap.set(obj, "player") // like this
console.log(weakMap)
console.log(weakMap.get(obj)) // use variable to use method

obj = null // removed from memory. garbage collected

let gus = {name: "gus"}
let waltore = {name: "waltore"}

function trackLogin(obj) {
    let count = weakMap.get(obj) || 0
   count++
   weakMap.set(obj, count)
   console.log(`${obj.name} has login ${count} time(s)`)
}

trackLogin(gus)
trackLogin(gus)
trackLogin(waltore)

gus = null // player removed

// cannot iterate, not enumerable, no size
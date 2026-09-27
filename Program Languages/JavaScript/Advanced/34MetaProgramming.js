let obj = {a: "real", no: 1}
console.log(Object.keys(obj)) // inspecting object is metaprogramming

Object.defineProperty(obj, "papamau", { // modifying object is metaprogramming
    get() {return 5}
})

let func = new Function("a","b","return a+b") // generating object is metaprogramming

let baseProxy = new Proxy(obj, {
    set(target,prop,val) {
        return target[prop] // Reflect.set(target,prop,val)
    }
})

let proxyz = new Proxy(obj, {
    set(target, property, value) {
        log(property + ": " + value)
        return target[property]
    }
})

function log(message) {
    const time = new Date().toLocaleTimeString()
    console.log(`[${time}] ${message}`)
}

proxyz.nah = "I would win"

let reflecting = new Proxy(obj, {
    set(target, property, value) { // value arguments is so important to set the prop
        log(property + ": " + value)
        return Reflect.set(target, property, value) // safe forwarding
    }
})

reflecting.wow = "anjass"
console.log(reflecting.wow)
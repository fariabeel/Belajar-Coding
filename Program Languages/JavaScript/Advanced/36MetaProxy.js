let obj = {}
let proxyz = new Proxy(obj, {
    get(target, prop) {
        console.log(`getting: ${prop}`)
        return target[prop]
    },
    set(target, prop, value) {
        console.log(`setting: ${prop}`)
        return target[prop]
    }
})

proxyz.a = "anjass"
let anjas = proxyz.a

proxyz = new Proxy(obj, {
    get(target, prop) {
        console.log(`getting: ${prop}`)
        return Reflect.get(target, prop) // safe forwarding
    },
    set(target, prop, value) { // value is important
        console.log(`setting: ${prop}`)
        return Reflect.set(target, prop, value) // safe forwarding
    }
})


proxyz = new Proxy(obj, {
    set(target, prop, val) {
        if(typeof val == "number") {
            console.log("setting: " + prop)
            return Reflect.set(target, prop, val)
        } else {
            console.log("Non-Number")
        }
    },
    get(target, prop) {
        console.log("getting: " + prop)
        return Reflect.get(target, prop)
    }
})

console.log("---setting---")
proxyz.a = "anjas"
console.log("---logging---")
console.log(proxyz.a)
console.log("-------------")

proxyz.a = 12
console.log(proxyz.a)

proxyz.a = "anjas"
console.log(proxyz.a)

let proxyName = new Proxy(obj, {
    set(target, prop, value) {
        return Reflect.set(target, prop, value)
    },
    get(target, prop) {
        if (prop == "fullName") {
            return target.fname + " " + target.lname
        }
        return Reflect.get(target, prop)
    }
})

proxyName.fname = "Emperor"
proxyName.lname = "Rannulfus"

console.log(proxyName.fullName)

// this proxy has full arguments in it arguments
proxyz = new Proxy(obj, {
    get(obj, prop, receiver) {
        return  Reflect.get(obj, prop, receiver)
    },
    set(obj, prop, val, receiver) {
        return Reflect.set(obj, prop, val, receiver)
    },
    has(obj, prop) {
        return Reflect.has(obj, prop)
    },
    deleteProperty(obj, prop) {
        return Reflect.deleteProperty(obj, prop)
    },
    apply(func, thisArg, args) {
        return Reflect.apply(func, thisArg, args) // learn more
        // trigger 
        // proxy()
        // proxy.call()
        // proxy.apply()
    },
    construct(obj, args, newTarget) {
        return Reflect.construct(obj, args, newTarget)
        // trigger
        // nex proxy()
    },
    getOwnPropertyDescriptor(obj, prop) {
        return Reflect.getOwnPropertyDescriptor(obj, prop)
        // trigger
        // Object.getOwnPropertyDescriptor(obj, prop)
    },
    defineProperty(obj, prop, descriptor) {
        return Reflect.defineProperty(obj, prop, descriptor)
        // trigger
        // Object.defineProperty()
    },
    getPrototypeOf(obj) {
        return Reflect.getPrototypeOf(obj)
        // Object.getPrototypeOf()
    },
    setPrototypeOf(obj, prototype) {
        return Reflect.setPrototypeOf(obj, prototype)
        // Object.setPrototypeOf()
    },
    isExtensible(obj) {
        return Reflect.isExtensible(obj)
        // Object.isExtensible()
    },
    preventExtensions(obj) {
        return Reflect.preventExtensions(obj)
        // Object.preventExtensions()
    },
    ownKeys(obj) {
        return Reflect.ownKeys(obj)
        // Object.keys()
        // Object.getOwnPropertyNames()
        // Object.getOwnPropertySymbols()
    }
})

proxyz.a = "real"

console.log("a" in proxyz) // checking prop

delete proxyz.a
console.log(proxyz.a)
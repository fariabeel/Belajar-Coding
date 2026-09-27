let obj = {a: "real"};
Object.defineProperty(obj,"boss",{value: "HellBeater"})
console.log(obj.boss)

obj = {boss: "HellBeater"};
Object.defineProperty(obj, "boss", {writable: false})
obj.boss = "LightCracker"
console.log(obj.boss)

Object.defineProperty(obj, "boss", {enumerable: false}) // don't know the use

obj = {lightBoss: "AceMaster", fireBoss: "HellBeater"}

Object.defineProperty(obj,"lightBoss",{enumerable: false})
console.log(Object.getOwnPropertyNames(obj)) // also list properties that not enumerable
console.log(Object.keys(obj)) // only enumerable properties

obj = {lightBoss: "AceMaster", fireBoss: "HellBeater"}
Object.defineProperty(obj, "listBosses", {
    get: function () {return this.lightBoss + " " + this.fireBoss}
})
console.log(obj.listBosses) // it's like obj.fullName()

obj = {counter: 0}
Object.defineProperty(obj, "increase", {
    get: function () {this.counter++}
})
Object.defineProperty(obj, "decrease", {
    get: function () {this.counter--}
})
Object.defineProperty(obj, "add", {
    set: function (value) {this.counter += value}
})
Object.defineProperty(obj, "substract", {
    set: function (value) {this.counter -= value}
})
Object.defineProperty(obj, "reset", {
    get: function () {this.counter = 0}
})
obj.increase
obj.increase
obj.decrease
obj.add = 10
obj.substract = 5
console.log(obj.counter)

/*
Object.defineProperty(obj,'',{value:'', writable: false, enumerable: false})
Object.getOwnPropertyNames(obj)
Object.keys(obj)

Object.defineProperty(obj, "", {
    get: function () {}
})
*/
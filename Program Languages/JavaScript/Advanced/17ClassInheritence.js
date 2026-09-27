class Constructor{
    constructor(name) {
        this.name = name
    }
    intro() {return "it's name is " + this.name}
}

class ConstructorSub extends Constructor {
    constructor(name,type) {
        super(name) // to run constructor use super method
        this.type = type
    }
    fullIntro() {return this.intro() + ", " + this.type}
}
let char = new ConstructorSub("Divinus", "MagicSwordman")
console.log(char.fullIntro())

class Constructor0{
    constructor(name) {
        this.name = name
        this.random = "slkfsd"
    }
    
    get real() {return this.random}
    set real(x) {this.random = x}
}
char = new Constructor0("Glance")
console.log(char.real)
char.real = "wow"
console.log(char.real)

class Constructor1{
    constructor(name) {
        this._name = name
        this._random = "slkfsd"
    }
    
    get random() {return this._random}
    set random(x) {this._random = x}
}
char = new Constructor1("Glance")
console.log(char.random)
char.random = "wow"
console.log(char.random)
// class is not hoisted
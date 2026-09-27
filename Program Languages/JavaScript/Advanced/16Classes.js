class Constructor{
    constructor(name, type) {
        this.name = name
        this.type = type
    }
}
let fighter = new Constructor("Deustance", "Fighter")
console.log(fighter)

class Constructor0{
    constructor(name, type, rank) {
        this.name = name
        this.type = type
        this.rank = rank
    }
    introduce() {
        return this.name + ", the " + this.rank
    }
}
fighter = new Constructor0("Dustance", "Fighter","Invincible")
console.log(fighter.introduce())

class Constructor1{
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    rank(a) {
        return a*2 + 10
    }
}
fighter = new Constructor1("Dustance","Fighter")
console.log(fighter.rank(4))
function constructor(a,b) {
    this.hp = a
    this.damage = b
}

let object = new constructor(123,534) // constructor invocation
console.log(object.hp,object.damage)

// html
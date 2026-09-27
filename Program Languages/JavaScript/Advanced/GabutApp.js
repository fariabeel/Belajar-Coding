// counting
{
    const obj = {number: 0}
    Object.defineProperty(obj,"plus",{
        get: function() {this.number += 1}
    })
    Object.defineProperty(obj,"pluc",{
        set: function(x) {this.number += x}
    })
    Object.defineProperty(obj,"minus",{
        get: function() {this.number -= 1}
    })
    Object.defineProperty(obj,"minuc",{
        set: function(x) {this.number -= x}
    })
    Object.defineProperty(obj,"multiply",{
        get: function() {this.number *= 1.1}
    })
    Object.defineProperty(obj,"multiplc",{
        set: function(x) {this.number *= x}
    })
    Object.defineProperty(obj,"divide",{
        get: function() {this.number /= 1.1}
    })
    Object.defineProperty(obj,"dividc",{
        set: function(x) {this.number /= x}
    })

    obj.plus
    obj.plus
    obj.plus
    obj.plus
    obj.plus
    obj.plus
    obj.plus
    obj.pluc = 3
    console.log(obj.number)

}

{
    let data = {
    king: "Great Wallace",
    kingdom: "SuperHoor",
    power: "Undefeatable",
    set king(x) {console.log(this.king,"killed","new king will be appointed"); this.king = x},
    set kingdom(x) {console.log(this.kingdom,"no longer exist","building new kingdom"); this.kingdom = x},
    set power(x) {console.log(`kingdom ${this.kingdom} known as ${this.power}`); this.power = x}
}
}
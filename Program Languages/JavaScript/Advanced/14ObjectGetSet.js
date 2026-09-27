let weapon = {
    type: "Wand",
    name: "LightEnlignment",
    class: "God Fallen Power",
    buffInfo: "120X Mana",
    set buff(info) {this.buffInfo = info},
    set upperCaseName(name) {this.name = name.toUpperCase()},
    get weapon() {return this.name},
    // secure better data quality when using getters and setters.
}
console.log(weapon.weapon)

weapon.buff = "Unlimited Mana"
console.log(weapon.buffInfo)

weapon.upperCaseName = "Enchanted LightEnlignment"
console.log(weapon.name)
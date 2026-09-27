let games = {rhytm: "Osu!", mancing: "Cast N Chill", rpg: "Black Souls, Fear & Hunger", gakJelas: "Sakura Clanker"}
console.log(games.gakJelas)

games.rhytm = "Rhythia"
console.log(games.rhytm)

games = new Object({
    rhytm: "Osu!", 
    mancing: "Cast N Chill", 
    "rpg": "Black Souls, Fear & Hunger", 
    gakJelas: "Sakura Clanker"
}) // no need to use new Object({})

// should declare objects with const keyword.
const emptyObject = {}

console.log(games["gakJelas"])
console.log(games.rpg)

export const rhytmGames = {one: "Osu!", two: "Rhythia", games: function() {return `${this.one}, ${this.two}`}}
console.log(rhytmGames.games())

function ObjectConstructor(a,b,c,d,e,f) { // pascal case is good practice
    this.name = a
    this.weapon = b
    this.attack = c
    this.speed = d
    this.hp = e
    this.rank = f
}

const polyRole = new ObjectConstructor("Æðelric Waltone", "God Hand", "999e999", "999e999", "999e999", "God Master")
const caster = new ObjectConstructor("Faith Summers", "Starfall Scepter", "3994", "1", "6990", "Caster Queen")
const fighter = new ObjectConstructor("Greysen Wesleye", "Meteoric", "7989", "569", "8909", "Dragon Slayer")
console.log(polyRole)

const character = {polyRole,caster,fighter}

// html

let arr = {king: {real: {anjass: {wow: {walawe: "real"}}}}}
console.log(arr.king.real.anjass.wow.walawe)

let map = new Map([["npc", 100], ["monsters", 12004], ["bosses", 500], ["gods", 12]])
console.log(map.size)

map.delete("gods")
console.log(map)

map.clear()
console.log(map)

map = new Map([["npc", 100], ["monsters", 12004], ["bosses", 500], ["gods", 12]])
console.log(map.has("bosses"))

let inp = []
map.forEach((value, key) => inp.push(key, value))
console.log(inp)

console.log(map.entries())
console.log(map.keys())
console.log(map.values())

console.log(map.values().reduce((total,value) => total + value))

let npc = {entity: "npc"}
let foes = {entitiy: "foes"}
let monsters = {entity: "monsters"}
let bosses = {entity: "bosses"}
let gods = {entity: "gods"}
map = new Map([[npc, 100],[foes, 569], [monsters, 12004], [bosses, 500]])
map.set(gods, 12)
console.log(map.get(npc))

let arrObj = [
    {entity: "npc", quantity: 100},
    {entity: "foes", quantity: 696},
    {entity: "monsters", quantity: 12004},
    {entity: "bosses", quantity: 500},
    {entity: "gods", quantity: 12}
]

let takesAction = ({quantity}) => quantity != 100 ? "fight" : "calm"
console.log(Map.groupBy(arrObj, takesAction))
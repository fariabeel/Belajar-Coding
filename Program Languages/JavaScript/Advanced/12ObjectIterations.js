let obj = {a: "real"}
let objB = {a: "wow"}
Object.assign(obj,objB,{b: "anjass"})
console.log(obj)

let map = new Map(Object.entries(obj))

let arr = [["HellBosses","Super Extreme"],["HellEnemy","Hard"]]
console.log(map)
console.log(Object.fromEntries(arr))

arr = [
    {enemyType:"Boss", name: "HellBoss"},
    {enemyType:"Army", name: "HellEnemy"}
]

function Callback ({ enemyType }) {return enemyType == "Boss" ? "Don't rush" : "Rush!!"}
let action = Object.groupBy(arr,Callback)
console.log(action)

obj = {a: "real",b: "anjass"}
for (let x in obj) {console.log(x)}
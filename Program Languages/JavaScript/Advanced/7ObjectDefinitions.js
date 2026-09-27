let obj = {economy: "Good", class: "Middle"}

let objB = Object.create(obj)
console.log(objB)
console.log(objB.economy, objB.class)

let arr = [
    ["economy","Good"],
    ["class","Middle"]
]
objB = Object.fromEntries(arr)
console.log(objB)

obj = {economy: "Good", class: "Middle"}
let econClass = {class: "Misqueen"}
Object.assign(obj, {economy:"bad"}, econClass)
console.log(obj)

obj = {economy: "Good", class: "Middle"}
let copy = obj
copy.economy = "anjass"
console.log(obj)
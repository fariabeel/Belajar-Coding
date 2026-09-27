let objA = {fullName: function() {return this.fName + " " + this.lName}}
let objB = {fName: "Lewis", lName: "Eustance"}
console.log(objA.fullName.bind(objB)())
let fullName = objA.fullName.bind(objB)
console.log(fullName())

// html

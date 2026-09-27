let objA = {fullName: function() {return this.fName + " " + this.lName}}
let objB = {fName: "Lewis", lName: "Eustance"}
console.log(objA.fullName.call(objB))

objA = {fullName: function(a,b) {return this.fName + " " + this.lName + " from " + a + " " + b}}
console.log(objA.fullName.call(objB,"Starfall","Kingdom"))
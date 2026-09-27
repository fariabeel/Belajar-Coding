let objA = {fullName: function(a,b) {return this.fName + " " + this.lName + " from " + a + " " + b}}
let objB = {fName: "Lewis", lName: "Eustance"}
console.log(objA.fullName.apply(objB, ["Starfall","Kingdom"]))
console.log(Math.max.apply(null, [1,3,2]))
console.log(Math.max.apply(Math, [1,3,2]))
console.log(Math.max.apply(" ", [1,3,2]))
console.log(Math.max.apply(0, [1,3,2]))

/* 
In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes 
the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.
 */
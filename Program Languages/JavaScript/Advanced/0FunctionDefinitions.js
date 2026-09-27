(function() {console.log("executed")})() // i think it's must be on the top and the function must be made once only
// (function() {console.log("executed")})() for the second cannot

let a = new Function("a","b","console.log(a*b); return a*b") // you don't have to use it
// same as
let b = function(a,b) {console.log(a*b)}

a(2,2)

b = a
b(2,2)

b = a(2,2)
b
b = ((a=2,b=2) => a*b)() * 3 // can use self 
console.log(b)
console.log(a.length) // return a number of arguments (a,b) = 2
console.log(function(a,b,c,d,e){}.length)
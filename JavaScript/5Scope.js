let a = () => {c='Scope'; console.log(c)} // Block and Scope
a()
// console.log(c) cannot because c is block scope

let c= 'Scope' // Global Scope
a = () => c
console.log(a())

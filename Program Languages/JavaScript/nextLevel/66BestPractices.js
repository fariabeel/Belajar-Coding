// minimize the use of global variable. it can be overwritten by other script
// local must be declared with let, const, or var or it will be global

{
// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";
 
price = 19.90;
discount = 0.10;

fullPrice = price - discount;
}

{
// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0;
const myArray = [];
const myObject = {};
}

// not recommended
{
var variable = 1
var variable; // not lose its value
console.log(variable)
}

// dont use new
{
let obj = new Object({
    value: "this is value"
})

// use primitive instead
obj = {value: "this is value"}
}

console.log(0 == "")
console.log(1 == "1")
console.log(1 == true)

console.log(0 === "") // strict equality operator
console.log(1 === "1")
console.log(1 === true)

// use parameter default
function func(x=0, y=0) {return x**y}

// ends switch with default
switch(true) {
    case true:
        break;
    default:
        break;
}

// avoid this. do it with primitive value
let string = new String("real")
console.log(typeof string)

// avoid using eval
eval ("var x = 1")
console.log(x)
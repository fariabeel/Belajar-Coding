console.log(func())
function func() {return "real"}
/* 
function func() {} can called before defined
() => {} cannot
function() {} cannot
*/

let defineFirst = () => "real"
console.log(defineFirst())

// html
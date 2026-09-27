{
    let theLet = 1; // unredeclare

    var theVar = 2;
    var theVar = 3; // redeclared
}

// console.log(theLet) error

var theVar = 5;
let theLet = 1

{
    var theVar = 4;
    let theLet = 2;
    const theConst = "const works like let"
}
console.log(theVar)
console.log(theLet)

wow = "wow"
// let wow; error
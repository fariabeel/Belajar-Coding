function real(a) {console.log(a**a)}
let square = real
square(2)
square()
square = function(a) {console.log(a**a)}
square = (a) => {console.log(a**a)}
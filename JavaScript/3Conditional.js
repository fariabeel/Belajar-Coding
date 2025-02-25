//         ''==false, 0==false too
if (false) {
    console.log('ewoo')
} else {
    console.log('wow')
}

console.log(1<2)
console.log(2>1)
console.log(1<2)
console.log(2<=2)
console.log(1>=1)
console.log(1!==2)
console.log(1===1)

if (2>1 && 3>2) {
    
}
if (2>1 || 3>2) {
    
}

console.log(!true
)

a=1
if (a) {
  console.log(a)
} else {
  console.log('didnt exist :(')
}

a=0
if (a) {
  console.log(a)
} else {
  console.log('didnt exist :(')
}

let b;
a=b||"don't know :("
console.log(b) 

a=1
a ? console.log('wow'): console.log('real')

b='aezakmi'
b?console.log('1'):console.log('0')

a='c';
if (a==='b') {
  console.log("it's b")
} else if (a==='a') {
  console.log("it's a")
} else{
  console.log("i don't know")
}

let a='2'
switch (a) {
  case 'real':
  console.log("wow")
  break;
  case'min':
  console.log(':-)')
  break;
  default:
  console.log("the fuck is this")
  break;
}
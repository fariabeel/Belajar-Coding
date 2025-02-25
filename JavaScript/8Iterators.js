const africaniggermanslave= () => console.log("Nigger Nigger Nigger Nigger Nig")
const NiggerSong= africaniggermanslave
NiggerSong()

let a = b => b*b
let c = (aa,bb) => console.log('result',aa(bb)+1)
c(a,10)

a= [13,54,65424,56,32,101]
a.forEach(number => console.log('number',number)) // execute each array

function number(b) {
    console.log('number',b)
}
a.forEach(number)

console.log(a.map(square=> {return square*square})) // map returns an array
// must return becuzz bracket

console.log(a.filter(b => b>40))

console.log(a.findIndex(b => b>100)) // return first index with true value
// not true all return -1
console.log(a[a.findIndex(b => b>100)])

a=[13,43,22,54]
console.log(a.reduce( (b,c) => b*c,1000000 ) )

console.log(a.some(b=> b===1))
//sum a=664092

console.log(a.some(b=> b===22)) 
// return true if found 22 in a, false otherwise

console.log(a.every(b => b<100))
// checking every element in a is below 100
// if all pass return true. other, return false


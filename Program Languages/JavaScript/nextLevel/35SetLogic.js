// all elements no dupicates
let setOne = new Set([1,2])
let setTwo = new Set([5,6])
console.log(setOne.union(setTwo))

setOne = new Set([1,2,3])
setTwo = new Set([2,3,4])
console.log(setOne.union(setTwo))

// same elements only
setOne = new Set([1,2,3])
setTwo = new Set([2,3,4])
console.log(setOne.intersection(setTwo))

setOne = new Set([1])
setTwo = new Set([2])
console.log(setOne.intersection(setTwo))

// setOne different only
setOne = new Set([1,2,3,4])
setTwo = new Set([3,4,5])
console.log(setOne.difference(setTwo))

// both different only
setOne = new Set([1,2,3])
setTwo = new Set([2,3,4])
console.log(setOne.symmetricDifference(setTwo))

// setOne in SetTwo
setOne = new Set([1,2,3])
setTwo = new Set([-1,1,2,3,4])
console.log(setOne.isSubsetOf(setTwo))

// setTwo in SetOne
setOne = new Set([1,2,3,4,5])
setTwo = new Set([2,3,4])
console.log(setOne.isSupersetOf(setTwo))

// setOne not in setTwo
setOne = new Set([1])
setTwo = new Set([2])
console.log(setOne.isDisjointFrom(setTwo)) // isDisjointFrom() small j


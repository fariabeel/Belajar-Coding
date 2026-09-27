let array = [1,2,3]
array.length = 2
console.log(array)
console.log(array.at(1))
console.log(array.at())
console.log(array[-1])
console.log(array.join(" _ "))


array = [1,2,3,4,5,6,7,8,9,0]
array.pop(); console.log(array)
array.shift(); console.log(array)
array.unshift("new"); console.log(array)

delete array[0]
// delete array cannot
console.log(array)

console.log(array.concat(["new","new0"]))
console.log(array) // not modified original array
console.log(array.concat([1,2,3],[1,2,3]))
console.log(array.concat([1],[1],[1]))
console.log(array.concat("string","stringer"))

// I'm confused with copyWithin()
arr = [1,2,3,4,5,6,7]
console.log(arr.copyWithin(2,0)) // remove 2 index in the veryback. copy all value from index 0 and so on. adding it from index 2

arr = [1,2,3,4,5,6,7]
console.log(arr.copyWithin(3,0)) // this too but 3 index removed and adding it's value from index 3
// copyWithin(index that stay, copy from given argument index)

arr = [1,2,3,4,5,6,7]
console.log(arr.copyWithin(3,0,2)) // changing 2 index (3, 4) value to copied index (0, 1) value

/*
complete within() 3 arguments explain

copyWithin(firstArg, secondArg, thirdArg)
copyWithin(
firstArg: changing index from firstArg till thirdArg, 
secondArg: copy index value from secondArg till thirdArg,
thirdArg: length that will be use for firstArg and SecondArg
)

target:	Indeks awal di mana elemen akan disalin.
start:	Indeks awal elemen yang akan disalin (inklusif).
end:	Indeks akhir elemen yang akan disalin (eksklusif). Jika dihilangkan, akan menyalin hingga akhir array.
*/

arr = [[1,2],[1,2]]
console.log(arr.flat())

console.log([1,2,3,4].flatMap(x => [x, x**x])) 
console.log([1,2,3,4].map(x => [x, x**x])) // different

arr = [1,2,3,4]
arr.splice(2,0,"zero","one")
console.log(arr)

arr = [1,2,3,4,5,6,7]
arr.splice(2,2,"zero","one") // remove (arg 2) index in front of "one"
console.log(arr)

arr = [1,2,3]
arr.splice(0,2) // remove (arg 2) index from index (arg 1)
console.log(arr)

arr = [1,2,3]
// not changing original array
console.log(arr.toSpliced(0,2))
console.log(arr.toSpliced(1,0,"zero","one"))

arr = [1,2,3,4,5]
// not changing original array
console.log(arr.slice(2))
console.log(arr.slice(1,3))
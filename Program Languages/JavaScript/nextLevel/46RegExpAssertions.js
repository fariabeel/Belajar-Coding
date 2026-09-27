console.log(/^hidoep/.test("hidoep joekoewiee!"))
console.log(/iee!$/.test("hidoep joekoewiee!"))
console.log("woowow bowo wow".search(/wo\b/)) // search the second of wo
console.log("woowow bowo wow".search(/\bwo/)) // search the first of wo
console.log(/real(?=me)/.test("realme"))
console.log(/real(?!me)/.test("realme"))
console.log(/(?<=me)real/.test("mereal"))
console.log(/(?<!me)real/.test("mereal"))
console.log("realreal real real".match(/(real)+/))

//html. there's html only syntdax

let match = "sklfsf: Eustace Lamber".match(/(?<firstName>\w+) (?<lastName>\w+)/) // return object
console.log(match)
let fName = match.groups.firstName
let lName = match.groups.lastName
console.log(fName + " " + lName)
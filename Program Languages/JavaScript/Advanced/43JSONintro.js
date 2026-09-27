let text = `
{"user":[
{"firstName":"Linley", "lastName":"Thorntone"},
{"firstName":"Aldebrand", "lastName":"Drechslerg"},
{"firstName":"Damianus", "lastName":"Acidinus"}
]}
`
const obj = JSON.parse(text)

console.log(obj.user[1].firstName, obj.user[2].lastName)
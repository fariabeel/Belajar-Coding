// String > String Search
let text="wanjay wanjay ANJAY"
console.log(`${text.indexOf("anjay")} ${text.lastIndexOf("anjay")}`)
console.log(`${text.indexOf("zawarudo")} ${text.lastIndexOf("zawarudo")}`)
console.log(`${text.indexOf("anjay",6)} ${text.lastIndexOf("anjay",6)}`)
console.log(text.search("anjay"))
console.log(text.search(/anjay/))
console.log(text.match(/anjay/g))
console.log(text.match(/anjay/gi))

// for global search
text="wanjay wanjay ANJAY"
let matching = text.match("anjay")
console.log(matching.length + " " + matching)
matching = text.match(/anjay/)
console.log(matching.length + " " + matching)
matching = text.match(/anjay/g)
console.log(matching.length + " " + matching)
matching = text.match(/anjay/gi)
console.log(matching.length + " " + matching)

console.log(Array.from(text.matchAll("anjay"))) // /anjay/ cannot
console.log(`${Array.from(text.matchAll("anjay"))}`)
console.log(Array.from(text.matchAll(/anjay/g)))
console.log(`${Array.from(text.matchAll(/anjay/g))}`)
console.log(Array.from(text.matchAll(/anjay/gi)))
console.log(`${Array.from(text.matchAll(/anjay/gi))}`)

text = "anjay Anjay"
console.log(text.includes("anjay"))
console.log(text.includes("jasldf"))
console.log(text.includes("anjay",6)) // checking start in index 6
console.log(text.startsWith("an"))
console.log(text.startsWith("jay"))
console.log(text.startsWith("jay",2)) // checking start in index 2

console.log(text.endsWith("jay"))
console.log(text.endsWith("jay",5)) // checking first 5 index

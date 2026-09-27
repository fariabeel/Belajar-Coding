console.log("aaaa".match(/a/g)) // match all
console.log("A".match(/a/i))
console.log("aaabb".match(/(aa)(bb)/d)) // specifies the start and the end 
console.log(("aaabb".match(/(aa)(bb)/d)).toString())
console.log("line\nline.".match(/line./s)) // accept new line (second "line" string)
console.log("line\nline.".match(/line./gs)) // dot match /n and match "." too

let pattern = /\w+/y
pattern.lastIndex = 4
console.log("abc def ghi".match(pattern)) // match index that has character from index 4 till space
pattern = /\w+/ // \w+ mean match any word
pattern.lastIndex = 4
console.log("abc def ghi".match(pattern))

console.log("\u{04DC0}")
console.log(/\u{04DC0}/u.test("䷀"))
console.log(/\u{04DC0}/.test("䷀")) // allowing full unicode support

// /\p{Emoji}/v means cheking for emoji
console.log(/\p{Emoji}/v.test("😄"))
console.log(/\p{Emoji}/.test("😄"))

pattern = /(?i:areal) meh/
console.log(pattern.test("areal meh"))

// html

console.log(/ /s.dotAll)
console.log(/ /.dotAll)
console.log(/ /g.global)
console.log(/ /.global)
console.log(/ /d.hasIndices)
console.log(/ /.hasIndices)
console.log(/ /i.ignoreCase)
console.log(/ /.ignoreCase)
console.log(/ /m.multiline)
console.log(/ /.multiline)
console.log(/ /y.sticky)
console.log(/ /.sticky)
console.log(/ /u.unicode)
console.log(/ /.unicode)
console.log(/ /v.unicodeSets)
console.log(/ /.unicodeSets)
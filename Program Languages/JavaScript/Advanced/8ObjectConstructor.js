function Constructor(a,b) {
    this.streamer = "speed!!"
    this.firstSentence =  a
    this.secondSentence = b
}
let obj = new Constructor("my mom", "is kinda")

Constructor.prototype.lastSentence = "homeless."
console.log(obj) // lastsSentence value not visible
console.log(obj.lastSentence)

obj.change = function(a) {this.streamer = a}
obj.change("kai Cenat!!")
console.log(obj)

function Constructor(a,b) {
    this.streamer = "speed!!"
    this.firstSentence =  a
    this.secondSentence = b
}
obj = new Constructor("my mom", "is kinda")

Constructor.prototype.method = function(a) {this.lastSentence = a}
obj.method("homeless")
console.log(obj) // not visible
console.log(obj.lastSentence)
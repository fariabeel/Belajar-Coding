function logging() {console.log("logged")}
console.log("wait a sec")
setTimeout(logging, 1000)
console.log("not affected with time")

setTimeout(function() {console.log("real")},1100)

let yapping = ["I'm","not","gay"]
setInterval( function () {
    let flooring = Math.floor(Math.random() * 10 / 3) - 1
    if (flooring == -1) {return} // like continue statement
    console.log(yapping[flooring])
},2000)
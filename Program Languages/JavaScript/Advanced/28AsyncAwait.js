function desmos() {
    return Promise.resolve("demonstration")
}
console.log(desmos())

desmos().then(
    function(val) { console.log(val) },
    function(err) { console.log("nahh, u got some error") } // can remove
)

async function asyncing() {
    return "It's async"
}
console.log(asyncing())

asyncing().then(
    function(val) {console.log(val) },
    function(err) { console.log("nahh, u got some error") } // can remove
)

async function waiting() {
    let promise = new Promise(function(resolve, reject) { // can remove reject
        resolve("no problem")
    })
    console.log(await promise)
}
waiting()

async function waitingLonger() {
    let promise = new Promise(function(resolve, reject) { // can remove reject
        setTimeout(() => {resolve("It's 500ms")}, 500)
    })
    console.log(await promise)
}
waitingLonger()
let janji = new Promise(function() {})
janji.then(() => {},() => {})

let promise = new Promise(function(solve, reject) {
    let x = 1
    if (x==0) {solve("yippieee")}
    else {reject(":(")}
})

promise.then( function(val) {console.log(val)}, function(err) {console.log(err)} )

// promise = new Promise(function(solve, reject) {
//     setTimeout(function() {solve("anjaassss")}, 200)
// })
// promise.then( function(val) {console.log(val)})
// uncomment it to learn

promise = new Promise(function(solve, reject) {
    let x = 1
    if (x==0) {solve("yippieee")}
    else {reject(":(")}
})

let sumpah = new Promise(function(res, rej) { res("anjasss") })

Promise.allSettled([promise,sumpah]).then(x => {
    x.forEach(x => console.log(
        x.status, // cheking the status
        x.status == "fulfilled" ? x.value : x.reason
    ))
})
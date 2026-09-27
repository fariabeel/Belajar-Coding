try { let x = y }
catch ( err ) { console.log(err.name + " | " + err.message) }
finally { console.log("case closed") }

try { console.log("test") }
catch ( err ) { console.log(err.name + " | " + err.message) }
finally { console.log("case closed") }

try {
    let num = 2
    if (num > 1) throw "too high"
    if (num < 1) throw "too low"
    if (num) throw "too perfect"
}
catch (err) { console.log(err) } // no err.message
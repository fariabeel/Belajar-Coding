let x
try { x = y }
catch(err) {
    // err is the whole information of error
    console.log(err.name + " | " + err.message)
}

try { (1).toUpperCase() } 
catch(err) { console.log(err.name + " | " + err.message) }

try { new Array(-1) }
catch(err) { console.log(err.name + " | " + err.message) }

try { (1).toPrecision(500) }
catch(err) { console.log(err.name + " | " + err.message) }

try { decodeURI("%%%") }
catch(err) { console.log(err.name + " | " + err.message) }
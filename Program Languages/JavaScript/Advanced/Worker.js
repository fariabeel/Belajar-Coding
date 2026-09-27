onmessage = function(e) {
    var buffer = e.data
    var sharedArray = new Int32Array(buffer)

    console.log("worker waiting...")
    var result = Atomics.wait(sharedArray, 0, 0)

    console.log("worker woken, result =", result)
    console.log("New value:", Atomics.load(sharedArray, 0))
}
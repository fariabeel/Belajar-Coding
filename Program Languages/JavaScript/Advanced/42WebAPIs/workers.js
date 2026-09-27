let i = 0
let pause = 1

function timedCount() {

    if (pause) {
        i++
        postMessage(i)
    }

    setTimeout("timedCount()", 1)

    onmessage = function(e) {
        if(e.data == "pause") {
            pause = 0
        } else {
            pause = 1
        }
    }
}

timedCount()


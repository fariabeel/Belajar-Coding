function add() {
    let counter = 0
    function plus() {counter += 1}
    plus()
    plus()
    plus()
    console.log(counter)
}
add()

function wow() {
    let counter = 0
    return function() {
        counter++
        return counter
    }
}

let counting = wow()
counting()
counting()
counting()
counting()
console.log(counting())
function test() {
    let count = 0
    return {
        increase() {
            count+=1
            console.log(count)
        },
        decrease() {
            count-=1
            console.log(count)
        }
    }
}

let counting = test()
counting.increase()
counting.increase()
counting.decrease()
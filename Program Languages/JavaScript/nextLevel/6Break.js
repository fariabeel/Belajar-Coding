// Loops > Break
for (let i=0; i<11; i++) {
    if (i==5) {
        break;
    }
    console.log(i)
}

console.log(new Date().getDay())

loop1: for (let i=0; i<10; i++) {
    loop2: for (let j=0; j<10; j++) {
        if(j===2) {
            break loop1;
        }
        console.log(`i=${i}, j=${j}`);
    } 
}

// look at html
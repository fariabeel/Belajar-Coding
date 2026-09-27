// Loops > Continue
for (let i=0; i<7; i++) {
    if (i == 5 || i == 4) {continue;}
    console.log(i)
}

console.log("-".repeat(20))

loop1: for (let i=0; i<4; i++) {
    loop2: for (let j=0; j<4; j++) {
        if(j===2) {
            continue loop1;
        }
        console.log(`i=${i}, j=${j}`);
    }
}
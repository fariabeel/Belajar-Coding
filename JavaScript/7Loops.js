for(let i=0; i<11; i++) {
    console.log(i)
}

for (let i=10; i>-1;i--) {
  console.log(i)
}


NameOfPahlawanIndonesian=['ambarusdi','ambatukam','ambaleon','rusdirasiregard','ambabatubara','andre','azril']
for (let i=0; i<NameOfPahlawanIndonesian.length;i++) {
    console.log(NameOfPahlawanIndonesian[i])
}

a=[2,3,34]
b=[2,4,8]
for (let i=0; i<a.length;i++) {
    for (let x=0; i<b.length;i++) {
        if (a[i]===b[x]) {
            console.log('both have same value',a[i])
        }
    }
}

i=0
while(i<10) {
  console.log(i)
  i++
}

i=0
do {
    console.log(i)
    i++
} while (i<0)

for(let i=0; i>-1; i++) {
    console.log(i)
    if (i===5) {
      break
    }
}
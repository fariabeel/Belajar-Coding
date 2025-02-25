function fuck(a) {
    console.log(`fuck you ${a}`)
  }
  fuck("fafa")

function badword() {
    console.log('fuck')
  }
badword();badword();badword();badword();badword();

function a(b='wow') {
    console.log(b)
  }
a()
a(1)

function a(a,b) {
    return a*b
  }
a(1,10)

let a= function(a,b) {
    return a*b
  }
console.log(a(2,2))

let a = (a,b) => {return a*b}
console.log(a(1,3))

let a = b => b==='real' ? 'wow': ':(' // single line with one parameter no need to return
console.log(a('r'))

a = b => b*b 
console.log(a(33))

a = b => b+19
console.log(a(1))

a = (a,b) => {return a*b}
console.log(a(1,3))
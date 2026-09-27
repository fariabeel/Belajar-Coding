function a(str) {
  let string = ""
  let removing = "aeiou"
  str.forEach(x => {
    if (removing.includes(x)) {}
    else {string += x}
  })
  return string
}

console.log(a("real"))
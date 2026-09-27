console.log("1w34tef".match(/\d/g)) // digit
console.log("1w34tef".match(/\D/g)) // non digit
console.log("1w3d_".match(/\w/g)) // match alphanumeric word character
console.log("1w3d_&*".match(/\W/g)) // match non alphanumeric word character
console.log("1 1 \t\n".match(/\s/g)) // match space
console.log("1 1 \t\n".match(/\S/g)) // match non space
console.log("oo fd 1o".replace(/\x6F/g,"*")) // xhh x6F = o
console.log("WwwW".match(/\u0057/g)) // uhh u0057 = W
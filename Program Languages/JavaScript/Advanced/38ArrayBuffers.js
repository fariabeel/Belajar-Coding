const buf = new ArrayBuffer(16)
console.log(buf.byteLength)

const view = new Uint8Array(buf)
view[0] = 10;
view[1] = 255;
view[2] = 128;

console.log(view[0], view[1], view[2])

let vieww = new Int32Array(buf)

vieww = new DataView(buf)

vieww.setInt32(0, 123456)
vieww.setInt16(4, 32000)

console.log(vieww.getInt32(0), vieww.getInt16(4))

let buff = new ArrayBuffer(8)
vieww = new Uint8Array(buff)

for (let i = 0; i < vieww.length; i++) {
    vieww[i] = i
}

let sliced = buff.slice(2, 5)
let slicedView = new Uint8Array(sliced)

console.log(vieww, slicedView)

function stringToArrayBuffer(str) {
    const encoder = new TextEncoder();
    return encoder.encode(str).buffer;
}

buff = stringToArrayBuffer("real")
let lenn = buff.byteLength
console.log(buff)
console.log(lenn)


function arrayBufferToString(buffer) {
    const decoder = new TextDecoder()
    return decoder.decode(new Uint8Array(buffer))
}

let encoder = new TextEncoder()
buff = encoder.encode("real").buffer
console.log(arrayBufferToString(buff))


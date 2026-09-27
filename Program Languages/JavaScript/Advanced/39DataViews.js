let buffer = new ArrayBuffer(16)
let view = new DataView(buffer)

let len0 = buffer.byteLength
let len1 = view.byteLength
let off = view.byteOffset
console.log(len0, len1, off)

view = new DataView(buffer, 4, 8)

len1 = view.byteLength
off = view.byteOffset
console.log(len0, len1, off)

buffer = new ArrayBuffer(4)
view = new DataView(buffer)

view.setUint32(0, 0x12345678, true)
console.log(new Uint8Array(buffer))

view.setUint32(0, 0x12345678, false)
console.log(new Uint8Array(buffer))

buffer = new ArrayBuffer(12)
view = new DataView(buffer)

view.setUint8(0,1)
view.setUint16(1, 500, true)
view.setFloat64(4, 3.14159, true)

let flag = view.getUint8(0)
let length = view.getUint16(1, true)
let value = view.getFloat64(4, true)

console.log(flag, length, value)
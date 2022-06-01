const {Buffer}=require("node:buffer")
console.log("Learning Bufferr!!!!!!!!")
// Creates a zero-filled Buffer of length 10.
const buf1=Buffer.alloc(10)
console.log(buf1)
// Creates a Buffer of length 10,
// filled with bytes which all have the value `1`.
const buf2 = Buffer.alloc(10,1);
console.log(buf2)
// Creates a Buffer containing the bytes [1, 2, 3].
const buf3 = Buffer.from([1, 2, 3]);
console.log(buf3)

const buf4 = Buffer.from('hello world', 'utf8');
console.log(buf4.toString('base64'))

const buf = Buffer.from([1, 2, 3]);
console.log(buf)

for (const b of buf) {
  console.log(b);
}
const { encode, decode } = require('..')();

const str = '你好，世界！';

const arr = encode(str);

console.log(decode(arr));
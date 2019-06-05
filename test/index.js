const assert = require('assert');
const { encode, decode } = require('..')();

const str = '你好，世界！';

const arr = encode(str);

assert.equal(decode(arr), str);
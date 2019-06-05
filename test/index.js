const assert = require('assert');
const GBK = require('..');

const { encode, decode } = GBK;

const str = '你好，世界！';

const arr = encode(str);

assert.equal(typeof GBK, 'function');
assert.equal(typeof GBK.encode, 'function');
assert.equal(typeof GBK.decode, 'function');
assert.equal(decode(arr), str);
assert.deepEqual(arr, [
    196,
    227,
    186,
    195,
    163,
    172,
    202,
    192,
    189,
    231,
    163,
    161
]);
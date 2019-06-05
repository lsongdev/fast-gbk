## fast-gbk 

> encode and decode utf8 to gbk string as fast as possible

[![fast-gbk](https://img.shields.io/npm/v/fast-gbk.svg)](https://npmjs.org/fast-gbk)
[![Build Status](https://travis-ci.org/song940/fast-gbk.svg?branch=master)](https://travis-ci.org/song940/fast-gbk)

### Installation

```bash
$ npm install fast-gbk
```

### Example

```js
const { encode, decode } = require('fast-gbk');

const str = '你好，世界！';

const arr = encode(str);

console.log(decode(arr));

```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---
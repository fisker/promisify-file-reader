# Promisify File Reader

[![Build Status](https://img.shields.io/travis/paypal/promisify-file-reader.svg?style=flat-square)](https://travis-ci.org/paypal/promisify-file-reader)
[![Code Coverage](https://img.shields.io/codecov/c/github/paypal/promisify-file-reader.svg?style=flat-square)](https://codecov.io/github/paypal/promisify-file-reader)
[![MIT License](https://img.shields.io/npm/l/promisify-file-reader.svg?style=flat-square)](https://github.com/paypal/promisify-file-reader/blob/master/license)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![downloads](https://img.shields.io/npm/dm/promisify-file-reader.svg?style=flat-square)](https://www.npmtrends.com/promisify-file-reader)
[![gzip size](http://img.badgesize.io/https://unpkg.com/promisify-file-reader/lib/index.min.mjs?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/promisify-file-reader/lib/)
[![module formats: umd, cjs, and es](https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-green.svg?style=flat-square)](https://unpkg.com/promisify-file-reader/lib/)]

## Usage

```html
<script src="https://unpkg.com/promisify-file-reader"></script>
```

```html
<script type="module">
  import PromisifyFileReader from "https://unpkg.com/promisify-file-reader?module"
</script>
```

## files

```text
lib/
├─ index.common.js  ( CommonJS )
├─ index.js         ( UMD )
├─ index.min.js     ( UMD, compressed )
├─ index.mjs        ( ES Module )
└─ index.min.mjs    ( ES Module, compressed )
```

## API

### prototype

supported all `FileReader` methods:

- `readAsArrayBuffer`
- `readAsBinaryString`
- `readAsDataURL`
- `readAsText`

> `FileReader#readAsBinaryString` is not available in some browser, like IE 10.
>
> we use another solution to support it.

example:

```js
const fileReader = new PromisifyFileReader()
const result = await fileReader.readAsArrayBuffer(file)
```

### static methods

in fact `new PromisifyFileReader()` is not really required, all methods can used as static method

- `readAsArrayBuffer`
- `readAsBinaryString`
- `readAsDataURL`
- `readAsText`

example:

```js
const result = await PromisifyFileReader.readAsArrayBuffer(file)
```

### short cut

you can also strip the `readAs` prefix

- `arrayBuffer`
- `binaryString`
- `dataURL`
- `text`

example:

```js
const result = await PromisifyFileReader.arrayBuffer(file)
// => same as readAsArrayBuffer
```

Notice: shortcut is **`NOT`** available for prototype

## ES Module

the ES Module build exports

```js
{
  // default
  PromisifyFileReader as default,

  // named
  arrayBuffer,
  binaryString,
  dataURL,
  text,
  readAsArrayBuffer,
  readAsBinaryString,
  readAsDataURL,
  readAsText,
}
```

```js
// import default
import PromisifyFileReader from "promisify-file-reader"

// import named
import {
  arrayBuffer,
  // ...
} from "promisify-file-reader"

// import both
import PromisifyFileReader, {
  arrayBuffer,
  // ...
} from "promisify-file-reader"
```

## relative

- [promisify-file](https://github.com/fisker/promisify-file)

## License

MIT © [fisker Cheung](https://www.fiskercheung.com/)

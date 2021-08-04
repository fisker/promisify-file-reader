# Promisify File Reader

[![gzip size](http://img.badgesize.io/https://unpkg.com/promisify-file-reader/dist/index.min.mjs?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/promisify-file-reader/dist/)
[![downloads](https://img.shields.io/npm/dm/promisify-file-reader.svg?style=flat-square)](https://www.npmtrends.com/promisify-file-reader)
[![module formats: umd, cjs, and es](https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-green.svg?style=flat-square)](https://unpkg.com/promisify-file-reader/dist/)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/promisify-file-reader/badge)](https://www.jsdelivr.com/package/npm/promisify-file-reader)

[![Build Status](https://img.shields.io/travis/fisker/promisify-file-reader.svg?style=flat-square)](https://travis-ci.org/fisker/promisify-file-reader)
[![Code Coverage](https://img.shields.io/codecov/c/github/fisker/promisify-file-reader.svg?style=flat-square)](https://codecov.io/github/fisker/promisify-file-reader)
[![MIT License](https://img.shields.io/npm/l/promisify-file-reader.svg?style=flat-square)](https://github.com/fisker/promisify-file-reader/blob/master/license)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Usage

```html
<script src="https://unpkg.com/promisify-file-reader"></script>
```

```html
<script type="module">
  import PromisifyFileReader from 'https://unpkg.com/promisify-file-reader?module'
</script>
```

## Files

```text
dist/
├─ index.cjs        ( CommonJS )
├─ index.js         ( UMD )
├─ index.min.js     ( UMD, compressed )
├─ index.mjs        ( ES Module )
└─ index.min.mjs    ( ES Module, compressed )
```

## API

### Prototype

supported all `FileReader` methods:

- `readAsArrayBuffer`
- `readAsBinaryString`
- `readAsDataURL`
- `readAsText`

> `FileReader#readAsBinaryString` is not available in some browser, like IE 10
>
> we use arrayBuffer to binaryString to support this method

example:

```js
const fileReader = new PromisifyFileReader()
const result = await fileReader.readAsArrayBuffer(file)
```

### Static methods

in fact `new PromisifyFileReader()` is not really required, all methods can use as static

- `readAsArrayBuffer`
- `readAsBinaryString`
- `readAsDataURL`
- `readAsText`

example:

```js
const result = await PromisifyFileReader.readAsArrayBuffer(file)
```

### Shortcuts

you can also strip the `readAs` prefix

- `arrayBuffer`
- `binaryString`
- `dataURL`
- `text`

Notice: shortcuts are **NOT** available in prototype

example:

```js
const result = await PromisifyFileReader.arrayBuffer(file)
// => same as readAsArrayBuffer
```

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

import example:

```js
// import default
import PromisifyFileReader from 'promisify-file-reader'

// import named
import {
  arrayBuffer,
  // ...
} from 'promisify-file-reader'

// import both
import PromisifyFileReader, {
  arrayBuffer,
  // ...
} from 'promisify-file-reader'
```

## Related

- [promisify-file](https://github.com/fisker/promisify-file)

# Promisify File Reader

## API

### PromisifyFileReader.prototype.arrayBuffer

return Promise&lt;ArrayBuffer&gt; use `FileReader.readAsArrayBuffer`

### PromisifyFileReader.prototype.text

return Promise&lt;String&gt; use `FileReader.readAsText`

### PromisifyFileReader.prototype.dataURL

return Promise&lt;String&gt; use `FileReader.readAsDataURL`

### PromisifyFileReader.prototype.binaryString

return Promise&lt;String&gt; use `FileReader.readAsBinaryString`

## Usage

### Basic syntax

```js
import PromisifyFileReader from "promisify-file-reader"
;(async file => {
  const fileReader = new PromisifyFileReader()
  try {
    console.log(await fileReader.readAsText(file))
  } catch (err) {
    console.error(err)
  }
})(new File(["hello from pfr.txt"], "pfr.txt", {type: "text/plain"}))
```

### Static methods

```js
import {
  readAsArrayBuffer,
  readAsText,
  readAsDataURL,
  readAsBinaryString,
} from "promisify-file-reader"
;(async file => {
  try {
    console.log(await readAsDataURL(file))
  } catch (err) {
    console.error(err)
  }
})(new File(["hello from pfr.txt"], "pfr.txt", {type: "text/plain"}))
```

## relative

- [promisify-file](https://github.com/fisker/promisify-file)

# Promisify File Reader

`PromisifyFileReader` is a `class` with methods `readAsArrayBuffer`, `readAsText`, `readAsDataURL`, `readAsBinaryString` just as `window.FileReader` does, but returns `Promise` resolve with `FileReader.result` or reject with `FileReader.error`.

## Usage

### Basic syntax

```js
import PromisifyFileReader from 'promisify-file-reader'

;(async file => {
  const fileReader = new PromisifyFileReader()
  try {
    console.log(await fileReader.readAsText(file))
  } catch (err) {
    console.error(err)
  }

})(new File(['hello from pfr.txt'], 'pfr.txt', {type: 'text/plain'}))
```

### Static methods

```js
import {
  readAsArrayBuffer,
  readAsText,
  readAsDataURL,
  readAsBinaryString
} from 'promisify-file-reader'

;(async file => {
  try {
    console.log(await readAsDataURL(file))
  } catch (err) {
    console.error(err)
  }
})(new File(['hello from pfr.txt'], 'pfr.txt', {type: 'text/plain'}))
```

## relative

  https://github.com/fisker/promisify-file
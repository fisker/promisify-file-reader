import promisify from '../helper/promisify.js'
import {FileReader} from '../helper/global-this.js'
import arrayBufferToBinaryString from '../helper/array-buffer-to-binary-string.js'
import readAsArrayBuffer from './array-buffer.js'

function getBinaryStringFromArrayBuffer(blob) {
  return readAsArrayBuffer(blob).then(arrayBufferToBinaryString)
}

// IE 10 don't has `readAsBinaryString`
const readAsBinaryString = FileReader.prototype.readAsBinaryString
  ? promisify(FileReader.prototype.readAsBinaryString)
  : getBinaryStringFromArrayBuffer

export default readAsBinaryString

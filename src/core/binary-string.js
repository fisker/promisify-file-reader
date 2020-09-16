import promisify from '../helper/promisify'
import {FileReader} from '../helper/global-this'
import readAsArrayBuffer from './array-buffer'
import arrayBufferToBinaryString from '../helper/array-buffer-to-binary-string'

function getBinaryStringFromArrayBuffer(blob) {
  return readAsArrayBuffer(blob).then(arrayBufferToBinaryString)
}

// IE 10 don't has `readAsBinaryString`
const readAsBinaryString = FileReader.prototype.readAsBinaryString
  ? promisify(FileReader.prototype.readAsBinaryString)
  : getBinaryStringFromArrayBuffer

export default readAsBinaryString

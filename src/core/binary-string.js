import promisify from '../helper/promisify'
import {FileReader} from '../helper/global-this'
import {readAsArrayBuffer} from './array-buffer'
import arrayBufferToBinaryString from '../helper/array-buffer-to-binary-string'

const {readAsBinaryString} = FileReader.prototype

function getBinaryStringFromArrayBuffer(blob) {
  return readAsArrayBuffer(blob).then(arrayBufferToBinaryString)
}

// IE 10 don't has `readAsBinaryString`
const binaryString = readAsBinaryString
  ? promisify(readAsBinaryString)
  : getBinaryStringFromArrayBuffer

export {binaryString, binaryString as readAsBinaryString}

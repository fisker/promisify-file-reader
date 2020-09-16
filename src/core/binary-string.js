import promisify from '../helper/promisify'
import {FileReader} from '../helper/global-this'
import readAsArrayBuffer from './array-buffer'
import arrayBufferToBinaryString from '../helper/array-buffer-to-binary-string'

const {readAsBinaryString: fileReaderReadAsBinaryString} = FileReader.prototype

function getBinaryStringFromArrayBuffer(blob) {
  return readAsArrayBuffer(blob).then(arrayBufferToBinaryString)
}

// IE 10 don't has `readAsBinaryString`
const readAsBinaryString = fileReaderReadAsBinaryString
  ? promisify(fileReaderReadAsBinaryString)
  : getBinaryStringFromArrayBuffer

export default readAsBinaryString

// eslint-disable-next-line unicorn/import-index
import {
  readAsArrayBuffer,
  readAsBinaryString,
  readAsDataURL,
  readAsText,
} from './core/index'

class FileReader {}
const {prototype} = FileReader

prototype.readAsArrayBuffer = readAsArrayBuffer
prototype.readAsBinaryString = readAsBinaryString
prototype.readAsDataURL = readAsDataURL
prototype.readAsText = readAsText

FileReader.readAsArrayBuffer = readAsArrayBuffer
FileReader.readAsBinaryString = readAsBinaryString
FileReader.readAsDataURL = readAsDataURL
FileReader.readAsText = readAsText
FileReader.arrayBuffer = readAsArrayBuffer
FileReader.binaryString = readAsBinaryString
FileReader.dataURL = readAsDataURL
FileReader.text = readAsText

export default FileReader

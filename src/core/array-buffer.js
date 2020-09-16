import promisify from '../helper/promisify'
import {Blob, FileReader} from '../helper/global-this'
import toStatic from '../helper/to-static'

const readAsArrayBuffer = Blob.prototype.arrayBuffer
  ? toStatic(Blob.prototype.arrayBuffer)
  : promisify(FileReader.prototype.readAsArrayBuffer)

export default readAsArrayBuffer

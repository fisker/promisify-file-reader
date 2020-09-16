import promisify from '../helper/promisify'
import {Blob, FileReader} from '../helper/global-this'

const readAsArrayBuffer =
  Blob.prototype.arrayBuffer ||
  promisify(FileReader.prototype.readAsArrayBuffer)

export default readAsArrayBuffer

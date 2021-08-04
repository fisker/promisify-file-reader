import promisify from '../helper/promisify.js'
import {Blob, FileReader} from '../helper/global-this.js'
import toStatic from '../helper/to-static.js'

const readAsArrayBuffer = Blob.prototype.arrayBuffer
  ? toStatic(Blob.prototype.arrayBuffer)
  : promisify(FileReader.prototype.readAsArrayBuffer)

export default readAsArrayBuffer

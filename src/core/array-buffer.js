import promisify from '../helper/promisify'
import {Blob, FileReader} from '../helper/global-this'

const arrayBuffer =
  Blob.prototype.arrayBuffer ||
  promisify(FileReader.prototype.readAsArrayBuffer)

export {arrayBuffer, arrayBuffer as readAsArrayBuffer}

import promisify from '../helper/promisify'
import {Blob, FileReader} from '../helper/global-this'

const text =
  Blob.prototype.arrayBuffer || promisify(FileReader.prototype.readAsText)

export {text, text as readAsText}

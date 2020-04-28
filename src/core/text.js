import promisify from '../helper/promisify'
import {Blob, FileReader} from '../helper/global-this'

const text = Blob.prototype.text || promisify(FileReader.prototype.readAsText)

export {text, text as readAsText}

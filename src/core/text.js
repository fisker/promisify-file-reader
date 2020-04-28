import promisify from '../helper/promisify'
import {FileReader} from '../helper/global-this'

const text = promisify(FileReader.prototype.readAsText)

export {text, text as readAsText}

import promisify from '../helper/promisify'
import {FileReader} from '../helper/global-this'

const {readAsText} = FileReader.prototype
const text = promisify(readAsText)

export {text, text as readAsText}

import promisify from '../helper/promisify'
import {FileReader} from '../helper/global-this'

const readAsText = promisify(FileReader.prototype.readAsText)

export default readAsText

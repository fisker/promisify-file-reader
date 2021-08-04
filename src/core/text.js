import promisify from '../helper/promisify.js'
import {FileReader} from '../helper/global-this.js'

const readAsText = promisify(FileReader.prototype.readAsText)

export default readAsText

import promisify from '../helper/promisify.js'
import {FileReader} from '../helper/global-this.js'

const readAsDataURL = promisify(FileReader.prototype.readAsDataURL)

export default readAsDataURL

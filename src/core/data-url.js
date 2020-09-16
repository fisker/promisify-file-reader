import promisify from '../helper/promisify'
import {FileReader} from '../helper/global-this'

const readAsDataURL = promisify(FileReader.prototype.readAsDataURL)

export default readAsDataURL

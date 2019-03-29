import promisify from '../helper/promisify'
import {FileReader} from '../helper/global-this'

const {readAsDataURL} = FileReader.prototype

const dataURL = promisify(readAsDataURL)

export {dataURL, dataURL as readAsDataURL}

import promisify from '../helper/promisify'
import {FileReader} from '../helper/global-this'

const {readAsArrayBuffer} = FileReader.prototype

const arrayBuffer = promisify(readAsArrayBuffer)

export {arrayBuffer, arrayBuffer as readAsArrayBuffer}

import * as core from './core/index'
import * as staticMethods from './static-methods'

class FileReader {}
Object.assign(FileReader.prototype, core)
Object.assign(FileReader, staticMethods)
export default FileReader

import * as core from './core'
import * as staticMethods from './static-methods'

class FileReader {}
Object.assign(FileReader.prototype, core)
Object.assign(FileReader, staticMethods)
export default FileReader

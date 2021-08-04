import * as core from './core/index.js'
import * as staticMethods from './static-methods.js'

class FileReader {}
Object.assign(FileReader.prototype, core)
Object.assign(FileReader, staticMethods)
export default FileReader

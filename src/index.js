// eslint-disable-next-line no-new-func
const globalThis = new Function('return this')()
const {FileReader, Promise} = globalThis
const {slice} = Array.prototype
const dataTypes = ['ArrayBuffer', 'Text', 'DataURL', 'BinaryString']

function readBlobAsPromise(method) {
  // eslint-disable-next-line prefer-rest-params
  const args = slice.call(arguments, 1)

  return new Promise(function(resolve, reject) {
    const fileReader = new FileReader()
    fileReader.addEventListener('load', () => resolve(fileReader.result))
    fileReader.addEventListener('error', () => reject(fileReader.error))
    method.apply(fileReader, args)
  })
}

function PromisifyFileReader() {}

for (const type of dataTypes) {
  const methodName = `readAs${type}`
  const method = readBlobAsPromise.bind(null, FileReader.prototype[methodName])
  PromisifyFileReader.prototype[methodName] = method
  PromisifyFileReader[methodName] = method
}

export default PromisifyFileReader

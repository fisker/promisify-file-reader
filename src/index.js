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

function callMethod(method) {
  return readBlobAsPromise.bind(this, method)
}

class PromisifyFileReader {}

dataTypes.forEach(function(type) {
  const methodName = `readAs${type}`
  const method = FileReader.prototype[methodName]
  PromisifyFileReader.prototype[methodName] = callMethod(method)
  PromisifyFileReader[methodName] = callMethod(method)
})

export default PromisifyFileReader

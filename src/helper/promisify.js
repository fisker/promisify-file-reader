import {FileReader, Promise} from './global-this'

function promisify(method) {
  return (blob, encoding) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = () => resolve(fileReader.result)
      fileReader.onerror = () => reject(fileReader.error)
      method.call(fileReader, blob, encoding)
    })
}

export default promisify

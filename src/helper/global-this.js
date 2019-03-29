// eslint-disable-next-line no-new-func
const globalThis = new Function('return this')()

const {FileReader, Promise} = globalThis

export {FileReader, Promise}

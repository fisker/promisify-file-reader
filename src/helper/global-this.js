// eslint-disable-next-line no-new-func
const globalThis = new Function('return this')()

const {FileReader, Promise, Blob} = globalThis

export {FileReader, Promise, Blob}

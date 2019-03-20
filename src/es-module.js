import PromisifyFileReader from './index'

const {
  readAsArrayBuffer,
  readAsText,
  readAsDataURL,
  readAsBinaryString,
} = PromisifyFileReader

export {
  PromisifyFileReader as default,
  readAsArrayBuffer,
  readAsText,
  readAsDataURL,
  readAsBinaryString,
  readAsArrayBuffer as arrayBuffer,
  readAsText as text,
  readAsDataURL as dataURL,
  readAsBinaryString as binaryString,
}

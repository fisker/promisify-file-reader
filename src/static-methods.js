import {
  readAsArrayBuffer,
  readAsBinaryString,
  readAsDataURL,
  readAsText,
} from './core'
import toStaticMethod from './helper/to-static-method'

const staticArrayBuffer = toStaticMethod(readAsArrayBuffer)
const staticBinaryString = toStaticMethod(readAsBinaryString)
const staticDataURL = toStaticMethod(readAsDataURL)
const staticText = toStaticMethod(readAsText)

export {
  staticArrayBuffer as readAsArrayBuffer,
  staticArrayBuffer as arrayBuffer,
  staticBinaryString as readAsBinaryString,
  staticBinaryString as binaryString,
  staticDataURL as readAsDataURL,
  staticDataURL as dataURL,
  staticText as readAsText,
  staticText as text,
}

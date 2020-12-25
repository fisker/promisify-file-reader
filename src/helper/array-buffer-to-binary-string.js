const {fromCharCode} = String

function arrayBufferToBinaryString(buffer) {
  const bytes = new Uint8Array(buffer)
  const {byteLength} = bytes
  let binary = ''
  // can we use a chuck size for this loop?
  for (let index = 0; index < byteLength; index += 1) {
    binary += fromCharCode(bytes[index])
  }
  return binary
}

export default arrayBufferToBinaryString

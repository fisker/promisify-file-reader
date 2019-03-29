const {fromCharCode} = String

function arrayBufferToBinaryString(buffer) {
  const bytes = new Uint8Array(buffer)
  const {byteLength} = bytes
  let binary = ''
  // can we use a chuck size for this loop?
  for (let i = 0; i < byteLength; i += 1) {
    binary += fromCharCode(bytes[i])
  }
  return binary
}

export default arrayBufferToBinaryString

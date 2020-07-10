import PromisifyFileReader, {
  arrayBuffer,
  binaryString,
  dataURL,
  text,
  readAsArrayBuffer,
  readAsBinaryString,
  readAsDataURL,
  readAsText,
} from '../src'

describe('constructor', () => {
  test('PromisifyFileReader is A class', () => {
    expect(new PromisifyFileReader()).toBeInstanceOf(PromisifyFileReader)
  })

  test('arrayBuffer', () => {
    const fileReader = new PromisifyFileReader()
    expect(readAsArrayBuffer).toBe(arrayBuffer)
    expect(PromisifyFileReader.arrayBuffer).toBe(arrayBuffer)
    expect(PromisifyFileReader.readAsArrayBuffer).toBe(arrayBuffer)
    expect(fileReader.readAsArrayBuffer).toBe(arrayBuffer)
  })

  test('binaryString', () => {
    const fileReader = new PromisifyFileReader()
    expect(readAsBinaryString).toBe(binaryString)
    expect(PromisifyFileReader.binaryString).toBe(binaryString)
    expect(PromisifyFileReader.readAsBinaryString).toBe(binaryString)
    expect(fileReader.readAsBinaryString).toBe(binaryString)
  })

  test('dataURL', () => {
    const fileReader = new PromisifyFileReader()
    expect(readAsDataURL).toBe(dataURL)
    expect(PromisifyFileReader.dataURL).toBe(dataURL)
    expect(PromisifyFileReader.readAsDataURL).toBe(dataURL)
    expect(fileReader.readAsDataURL).toBe(dataURL)
  })

  test('text', () => {
    const fileReader = new PromisifyFileReader()
    expect(readAsText).toBe(text)
    expect(PromisifyFileReader.text).toBe(text)
    expect(PromisifyFileReader.readAsText).toBe(text)
    expect(fileReader.readAsText).toBe(text)
  })
})

const {JSDOM} = require('jsdom')
const {window} = new JSDOM('')
const text = 'hello from pfr.txt'
const textFile = new window.File([text], 'pfr.txt', {type: 'text/plain'})

global.FileReader = window.FileReader
const PromisifyFileReader = require('../')
const fr = new PromisifyFileReader()

describe('test explored object', () => {
  test('PromisifyFileReader is function', () => {
    expect(PromisifyFileReader).toBeInstanceOf(Function)
  })
})

describe('text data type', () => {
  test('ArrayBuffer', async () => {
    const result = await fr.readAsArrayBuffer(textFile)
    expect(result).toBeInstanceOf(window.ArrayBuffer)
  })

  test('Text', async () => {
    const result = await fr.readAsText(textFile)
    expect(result).toBe(text)
  })

  test('DataURL', async () => {
    const result = await fr.readAsDataURL(textFile)
    const expectResult = result.includes('base64')
      ? `data:text/plain;base64,${Buffer.from(text).toString('base64')}`
      : `data:text/plain;charset=undefined,${encodeURIComponent(text)}`
    expect(result).toBe(expectResult)
  })

  test('BinaryString', async () => {
    const result = await fr.readAsBinaryString(textFile)
    expect(result).toBe(text)
  })
})

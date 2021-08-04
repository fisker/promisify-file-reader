import {readFileSync} from 'fs'
import path from 'path'
import {Buffer} from 'buffer'

import {
  readAsArrayBuffer,
  readAsBinaryString,
  readAsDataURL,
  readAsText,
} from '../src/index.js'

const png = readFileSync(path.join(__dirname, 'test.png'))

const pngFile = new window.File([png.buffer], 'test.png', {
  type: 'image/png',
})

const text = `${(Math.random() * Date.now()).toString(36)}中文`
const textFile = new window.File([text], 'unnamed.txt', {
  type: 'text/plain',
})

describe('text data type', () => {
  test('ArrayBuffer', async () => {
    const result = await readAsArrayBuffer(textFile)
    expect(result).toBeInstanceOf(window.ArrayBuffer)
  })

  test('Text', async () => {
    const result = await readAsText(textFile)
    expect(result).toBe(text)
  })

  test('Text with encoding', async () => {
    const text1 = await readAsText(textFile, 'utf8')
    const text2 = await readAsText(textFile, 'ascii')
    expect(text1).not.toBe(text2)
  })

  test('DataURL text', async () => {
    const result = await readAsDataURL(textFile)
    const [, content] = result.split(',')
    const expectResult = result.includes('base64')
      ? Buffer.from(text).toString('base64')
      : encodeURIComponent(text)
    expect(content).toBe(expectResult)
  })

  test('DataURL png', async () => {
    const result = await readAsDataURL(pngFile)
    expect(result).toBe(`data:image/png;base64,${png.toString('base64')}`)
  })

  test('BinaryString', async () => {
    const result = await readAsBinaryString(textFile)
    expect(result).toBe(Buffer.from(text).toString('binary'))
  })
})

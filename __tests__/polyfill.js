import {readFileSync} from 'fs'
import arrayBufferToBinaryString from '../src/helper/array-buffer-to-binary-string'

delete window.FileReader.prototype.readAsBinaryString
const readAsBinaryString = require('../src/core/binary-string').default

const png = readFileSync(`${__dirname}/test.png`)

const pngFile = new window.File([png.buffer], 'test.png', {
  type: 'image/png',
})

describe('arrayBufferToBinaryString unit test', () => {
  test('arrayBufferToBinaryString', () => {
    const binary = png.toString('binary')
    const binary2 = arrayBufferToBinaryString(png.buffer)
    expect(binary).toBe(binary2)
  })
})

describe('polyfilled readAsBinaryString', () => {
  test('BinaryString', async () => {
    const binary = png.toString('binary')
    const binary2 = await readAsBinaryString(pngFile)
    expect(binary2).toBe(binary)
  })
})

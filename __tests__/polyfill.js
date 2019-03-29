/**
 * @jest-environment jsdom-thirteen
 */
import {readFileSync} from 'fs'

delete window.FileReader.prototype.readAsBinaryString
const {readAsBinaryString} = require('../src/core/binary-string')

const png = readFileSync(`${__dirname}/test.png`)

const pngFile = new window.File([png.buffer], 'test.png', {
  type: 'image/png',
})

describe('polyfill  ', () => {
  test('BinaryString', async () => {
    const binary = png.toString('binary')
    const binary2 = await readAsBinaryString(pngFile)
    expect(binary2).toBe(binary)
  })
})

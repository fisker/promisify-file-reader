/* globals define: true, module: true */
;(function () {
  'use strict'

  var root = Function('return this')() // eslint-disable-line
  var FileReader = root.FileReader
  var dataTypes = [
    'ArrayBuffer',
    'Text',
    'DataURL',
    'BinaryString'
  ]

  function umdExport (name, mod) {
    if (typeof define === 'function' && define.amd) {
      define(name, [], function () {
        return mod
      })
    } else if (typeof module === 'object' && module.exports) {
      module.exports = mod
    } else {
      root[name] = mod
    }

    return mod
  }

  function readAsPromise (method, file, args) {
    var fileReader = new FileReader()

    return new Promise(function (resolve, reject) {
      fileReader.onload = function () {
        resolve(fileReader.result)
      }

      fileReader.onerror = function () {
        reject(fileReader.error)
      }

      if (args.length <= 1) {
        method.call(fileReader, file)
      } else {
        method.apply(fileReader, args)
      }
    })
  }

  function callMethod (methodName) {
    var method = FileReader.prototype[methodName]

    return function readAs (file) {
      return readAsPromise(
        method,
        file,
        arguments
      )
    }
  }

  function PromisifyFileReader () {}

  dataTypes.forEach(function (type) {
    var methodName = 'readAs' + type
    PromisifyFileReader.prototype[methodName] = callMethod(methodName)
    PromisifyFileReader[methodName] = callMethod(methodName)
  })

  PromisifyFileReader.reader = new PromisifyFileReader()

  return umdExport('PromisifyFileReader', PromisifyFileReader)
})()
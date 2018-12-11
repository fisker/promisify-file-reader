/* globals define: true, module: true */
;(function () {
  'use strict'

  var root = Function('return this')() // eslint-disable-line
  var FileReader = root.FileReader
  var toString = Object.prototype.toString
  var concat = Array.prototype.concat
  var dataTypes = [
    'ArrayBuffer',
    'Text',
    'DataURL',
    'BinaryString'
  ]

  function noop () {}

  function checkBlob (x) {
    var type = toString.call(x).slice(8, -1)

    if (type !== 'Blob' && type !== 'File') {
      throw new TypeError(
        'parameter 1 is not of type "Blob"'
      )
    }
  }

  function readAsPromise (method, args, onLoad, onError) {
    onLoad = onLoad || noop
    onError = onError || noop
    var fileReader = new FileReader()

    return new Promise(function (resolve, reject) {
      fileReader.onload = function () {
        var result = fileReader.result
        resolve(result)
        onLoad(result)
      }

      fileReader.onerror = function () {
        var error = fileReader.error
        resolve(error)
        onError(error)
      }

      method.apply(fileReader, args)
    })
  }

  function callMethod (method) {
    return function readFile () {
      var reader = this
      reader.result = null
      reader.error = null

      return readAsPromise(
        method,
        arguments,
        function (result) {
          reader.result = result
        },
        function (error) {
          reader.error = error
        }
      )
    }
  }

  function callMethodWithFile (method) {
    return function read () {
      return readAsPromise(
        method,
        concat.call([this.file], arguments)
      )
    }
  }

  function PromiseFileReader () {}

  function PromiseFile (blob) {
    checkBlob(blob)
    this.file = blob
  }

  dataTypes.forEach(function (type) {
    var readerMethod = 'readAs' + type
    var fileMethod = type[0].toLowerCase() + type.slice(1)
    var method = FileReader.prototype[readerMethod]
    PromiseFileReader.prototype[readerMethod] = callMethod(method)
    PromiseFile.prototype[fileMethod] = callMethodWithFile(method)
  })


  // explore
  var promiseFileReader = new PromiseFileReader()
  PromiseFileReader.FileReader = PromiseFileReader
  PromiseFileReader.fileReader = promiseFileReader
  PromiseFileReader.File = PromiseFile

  if (typeof define === 'function' && define.amd) {
    define('PromiseFile', [], function () {
      return PromiseFileReader
    })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = PromiseFileReader
  } else {
    root.PromiseFile = PromiseFile
    root.PromiseFileReader = PromiseFileReader
    root.promiseFileReader = promiseFileReader
  }
})()
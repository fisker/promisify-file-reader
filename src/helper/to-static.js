function toStatic(method) {
  return function (blob, encoding) {
    return method.call(blob, encoding)
  }
}

export default toStatic

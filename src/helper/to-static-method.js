function toStaticMethod(method) {
  return function (file, ...arguments_) {
    return method.apply(file, arguments_)
  }
}

export default toStaticMethod

enum Type {
  Strong,
  Week,
}

class Java {
  public helloJava() {
    console.log('hello Java')
  }
}

class JavaScript {
  public helloJavaScript() {
    console.log('hello JavaScript')
  }
}

function getLanguage(type: Type) {
  let langInstance = type === Type.Strong ? new Java() : new JavaScript()

  // 各种类型断言，不优雅
  if ((langInstance as Java).helloJava) {
    ;(langInstance as Java).helloJava()
  } else {
    ;(langInstance as JavaScript).helloJavaScript()
  }

  return langInstance
}

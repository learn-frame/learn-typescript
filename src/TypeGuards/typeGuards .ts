// TypeScript 能保证变量在特定区块中是确定的类型，此之谓类型保护

enum Type {
  Strong,
  Week,
}

class Java {
  private java = 'java'

  public helloJava() {
    console.log('hello Java')
  }
}

class JavaScript {
  public helloJavaScript() {
    console.log('hello JavaScript')
  }
}

// lang is Java 称作类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
  return !!(lang as Java).helloJava
}

function getLanguage(type: Type, x: string | number) {
  let langInstance = type === Type.Strong ? new Java() : new JavaScript()

  // 各种类型断言，不优雅
  if ((langInstance as Java).helloJava) {
    ;(langInstance as Java).helloJava()
  } else {
    ;(langInstance as JavaScript).helloJavaScript()
  }

  // 使用 instanceof
  if (langInstance instanceof Java) {
    langInstance.helloJava()
  } else {
    langInstance.helloJavaScript()
  }

  // 使用 in
  if ('java' in langInstance) {
    langInstance.helloJava()
  } else {
    langInstance.helloJavaScript()
  }

  // 使用 typeof
  if (typeof x === 'string') {
    console.log(x.length)
  } else {
    console.log(x.toFixed())
  }

  // 通过创建类型保护函数
  if (isJava(langInstance)) {
    langInstance.helloJava()
  } else {
    langInstance.helloJavaScript()
  }

  return langInstance
}
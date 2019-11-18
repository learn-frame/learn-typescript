declare function moduleLib<T>(options: Options<T>): void

interface Options<T> {
  [index: string]: T
}

declare namespace moduleLib {
  const version: string
  function doSomething(): void
}

export = moduleLib

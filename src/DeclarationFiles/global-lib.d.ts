declare function globalLib<T>(options: globalLib.Options<T>): void

declare namespace globalLib {
  const version: string
  function someFn(): void
  interface Options<T> {
    [index: string]: T
  }
}

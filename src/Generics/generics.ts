// 泛型

interface ILength {
  length: number
}

function getLength<T extends ILength>(value: T) {
  return value.length
}

const getLength1 = <T extends ILength>(value: T) => value.length

getLength([])
getLength('abc')
getLength({
  length: 1,
})

interface IRes<T> {
  success: boolean
  code: number
  data: T
  <K>(arg: K): K
}

type Foo = <T>(arg: T) => number

function Bar<T>(arg: T): any {
  return arg
}

const Foo = <T>(arg: T): T => arg

const myIdentity: { <T>(arg: T): T } = function<T>(arg: T): T {
  return arg
}

const myIdentities: { <T>(arg: T): T } = <T>(arg: T): T => arg

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
}

// 泛型

interface ILength {
  length: number
}

function getLength<T extends ILength>(value: T) {
  return value.length
}

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

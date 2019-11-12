import { globalAgent } from 'http'

// 引子
const o = {
  a: 1,
  b: 2,
  c: 3,
}

const getValueList = (o: any, keys: string[]) => {
  return keys.map(key => o[key])
}

getValueList(o, ['a', 'b']) // [1, 2]

// 这样显然做不到对对象的约束
getValueList(o, ['a', 'e']) // [1, undefined]

// 索引类型的查询操作符 keyof T

interface Obj {
  a: string
  b: boolean
}

const key: keyof Obj = {
  a: '',
}

// 索引类型的访问操作符 T[K]

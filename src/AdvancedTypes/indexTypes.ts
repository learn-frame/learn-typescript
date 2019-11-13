// 引子
const o = {
  a: 1,
  b: 2,
  c: 3,
}

const getValueList = (o: { [index: string]: number }, keys: string[]) => {
  return keys.map(key => o[key])
}

getValueList(o, ['a', 'b']) // [1, 2]

// 但当访问一个对象不存在的属性时，TS 也不会报错
getValueList(o, ['a', 'e']) // [1, undefined]

// 索引类型的查询操作符 keyof T
// T 所有公共属性 key 的联合类型
interface Obj {
  a: string
  b: boolean
}

// type IIndexType = "a" | "b"
type IIndexType = keyof Obj

// 索引类型的访问操作符 T[K]
const someStr: Obj['a'] = ''

// 因此改造一番
const getValueList1 = <T, K extends keyof T>(o: T, keys: K[]): T[K][] => {
  return keys.map(key => o[key])
}

getValueList1(o, ['a', 'b']) // [1, 2]
// getValueList1(o, ['a', 'W']) // Type 'string' is not assignable to type '"a" | "b" | "c"'.

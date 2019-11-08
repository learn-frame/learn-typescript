// 元组规定数组元素的个数和类型
const tuple: [number, string] = [1, '1']
// ⚠️ 元组可以使用 Array 方法 并且修改元组不会报错
tuple.push(2)
// 但是访问这个新增加的元素即报错
// TS2493: Tuple type '[number, string]' of length '2' has no element at index '2'.
// tuple[2]

// 函数有类似 interface / implement 的功能
// 貌似没什么卵用
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 在 tsconfig.json 将 strictNullChecks 设为 false 时
// undefined 和 null 将可以赋值给其他类型
let num = 1
// num = undefined
// num = null

// 在 JS 中, undefined 不是关键字, 因此它可以被任意赋值, 为避免出现错误.
// 可以使用 void 0 代替 undefined
// TS 中的 undefined 代表没有返回值
const noop = (): void => {}

// 返回 never 的函数必须存在无法达到的终点
// 如「抛出」异常的函数 和 死循环函数
const showError = (): never => {
  throw new Error()
}

const endless = (): never => {
  while (true) {
    // do something...
  }
}

// 成员少的兼容成员多的

/*
 * 变量兼容性
 */
let string: string = 'abc'

// 将 "strictNullChecks": false 时下面这句将不会报错
// string = null

/*
 * 接口兼容性
 */
interface X {
  a: number
  b: number
}

interface Y extends X {
  c: number
}

let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }

x = y // X 是 Y 的 “子集”，故 y 可以赋值给 x
// y = x 报错

/*
 * 函数兼容性
 */

// 1) 参数个数的兼容
type Handler = (a: number, b: number) => void

// 定义一个高阶函数
function hoc(handler: Handler) {
  return handler
}

// 传入的参数是一个 Handler 类型的函数
// 虽然 Handler 类型的函数要求传入两个参数
// 但只要参数小于等于两个即可
hoc(() => {})
hoc((a: number) => {})
// hoc((a: string) => {}) 类型不一致肯定出错
// hoc((a: number, b: number, c: number) => {}) 参数个数超出则报错

// 2) 可选/不定参数的兼容
let a = (p1: number, p2: number) => {}
let b = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
// a = b ✔️
// c = b ✔️
// a = c ✔️
// c = a ✔️
// b = c ❌
// b = a ❌

interface Point3D {
  x: number
  y: number
  c: number
}

interface Point2D {
  x: number
  y: number
}
let p3d = (p: Point3D) => {}
let p2d = (p: Point2D) => {}
// p3d = p2d ✔️
// p2d = p3d ❌

// 3) 返回值类型的兼容
let foo = () => ({
  name: 'yancey',
})

let bar = () => ({
  name: 'yancey',
  age: 18,
})

// foo = bar ✔️
// bar = foo ❌

// 对于函数重载，精确类型的参数个数要大于等于泛类型的参数个数
function overload(a: number, b: number, c: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}

// 可以通过 "strictFunctionTypes": false 解决上述问题

/*
 * 枚举兼容性
 */
enum Fruit {
  Apple,
  Banner,
}

enum Color {
  Red,
  Green,
}

// ❌ 因为 fruit 是 number 类型
// let fruit: Fruit = 'abc'
let fruit: Fruit = 1 // ✔️
let fruit1: Fruit.Apple = 1 // ✔️
let fruit2: number = Fruit.Apple // ✔️

// 枚举之间不存在兼容性，即便 Fruit 和 Color 本质都是 number 类型
// let color: Color.Green = Fruit.Apple

/*
 * 类兼容性
 */
class A {
  public id: number
  constructor(public p1: number, public readonly p2: number) {
    this.p1 = p1
    this.p2 = p2
    this.id = 1
  }

  // 静态属性不参与兼容性校验
  static staticValue = 1
}

class B {
  public id: number
  constructor(public p1: number) {
    this.p1 = p1
    this.id = 2
  }
}

let instanceA = new A(1, 2)
let instanceB = new B(1)
// instanceA = instanceB ❌
instanceB = instanceA // ✔️

// 当有私有成员时实例将不会兼容
// 只有子类和父类的实例互相兼容
class C {
  private a = 1
}

class D {
  private a = 1
}

let instanceC = new C()
let instanceD = new D()
// instanceC  = instanceD ❌
// instanceD = instanceC ❌

class ChildC extends C {}

let instanceChildC = new ChildC()
instanceC = instanceChildC // ✔️
instanceChildC = instanceC // ✔️

/*
 * 泛型兼容性
 */

// 当泛型接口中没有属性使用到 T 时，两个对象兼容
interface Empty<T> {
  foo(): void
}
let o1: Empty<number> = { foo: () => {} }
let o2: Empty<string> = { foo: () => {} }
o1 = o2 // ✔️
o2 = o1 // ✔️

// 当泛型接口中的属性使用到 T 时，两个对象不会兼容
interface IEmpty<T> {
  value: T
}
let o3: IEmpty<number> = { value: 1 }
let o4: IEmpty<string> = { value: 'a' }
// o3 = o4 // ❌
// o4 = o3 // ❌

let log1 = <T>(x: T) => x
let log2 = <U>(x: U) => x

log1 = log2 // ✔️
log2 = log1 // ✔️

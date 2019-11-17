/*
 * 接口合并
 */

interface SomeInterface {
  x: number
  // y: string 下面有一个 y 被赋值成了 number, 这里就会报错
}

interface SomeInterface {
  y: number
}

const obj: SomeInterface = {
  x: 1,
  y: 1,
}

// 对于接口中函数的声明合并将构成重载

// 后声明的接口先查询, 并且按照书写顺序
interface FnInterface {
  foo(key: number): number // 3
}

interface FnInterface {
  foo(key: string): string // 1
  foo(key: string[]): string[] // 2
}

const fnObj: FnInterface = {
  foo(key: any) {
    return key
  },
}

// 当参数为字面量时，则字面量优先级更高
interface FnInterface1 {
  foo(key: number): number // 5
  foo(key: 'a'): string // 2
}

interface FnInterface1 {
  foo(key: string): string // 3
  foo(key: string[]): string[] // 4
  foo(key: 'b'): string // 1
}

/*
 * 命名空间合并
 */

// 从上一节可以看出，一个命名空间可以分布在不同的文件里，但与接口不同的是，
// 命名空间不同重复定义 export 的变量

// 比如在上一节中，已经在 Area 中定义了 export 的 squareArea
// 这里就不能再重复定义
namespace Area {
  // export const squareArea = (side: number) => side ** 2
}

/*
 * 命名空间与函数合并
 */

function Lib() {}
namespace Lib {
  export const version = '1.0'
  export const bar = () => {}
}
console.log(Lib.version)
console.log(Lib.bar())

/*
 * 命名空间与类合并
 */

// 命名空间里的属性和方法将变成类的静态属性和方法
class Class {}
namespace Class {
  export const version = '1.0'
  export const bar = () => {}
}
console.log(Class.version)
console.log(Class.bar())

/*
 * 命名空间与枚举合并
 */

enum Colors {
  Green,
  Red,
}
namespace Colors {
  export const bar = () => {}
}

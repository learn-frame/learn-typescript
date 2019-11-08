# 接口

```ts
interface IRes<T> {
  readonly code: number // 只读属性
  message?: string // 可选属性
  data: T
}

// 对于一个对象字面量
// 属性及其赋值必须精准
const res: IRes<boolean> = {
  code: 1,
  message: '稳', // 可选属性可有可不用有
  data: true,
  // other: '' 添加接口之外的属性将报错
}

// res.code = 2 只读属性不能再赋值
```

## 鸭子类型

对于给函数的传参，接口将遵循鸭子类型，即接口是传入对象的子集即可。

```ts
const foo = (res: IRes<boolean>) => {}

const o = {
  code: 1,
  message: '稳',
  data: true,
  other: '', // 即便存在 IRes 接口之外的属性，也不会报错
}

foo(o)
```

不过你如果直接给 foo 函数传一个对象，而非对象的引用，则必须要精准传值。

```ts
foo({
  code: 1,
  message: '稳',
  data: true,
  // other: '', 这里的 other 就会报错
})
```

## 字符串/数字索引签名

### 语法

```ts
// 字符串索引类型签名
interface IStringIndex {
  // 只读模式下可以防止给索引重新赋值
  readonly [key: string]: any
}

// 数字索引类型签名
interface INumberIndex {
  readonly [key: number]: any
}
```

### 同时使用两种索引类型签名

在一个接口里可以同时使用字符串索引签名和数字索引签名，但要保证字符串索引签名所指向的接口是数字类型索引签名的子集。

```ts
export interface IA {
  name: string
}

export interface IB extends IA {
  some: string
}

export interface IC {
  [index: number]: IA // IB ∉ IA 因此这里会报错
  [index: string]: IB
}
```

### 索引类型约束 value 的类型

```js
interface NumberDictionary {
  [index: string]: number
  length: number
  // name: string 该接口定义了索引类型签名的 value 都是数字，所以这里就会报错
}

interface IChild extends NumberDictionary {
  // some: string 同理这里返回 string 也会报错
}
```

## 类类型

- 类的接口只能约束公有属性和方法，private/protected/static 的属性和方法都不能被约束。

- 类实现的接口不能约束构造函数，因为构造函数默认是静态的

```ts
// 报错
// 类实现的接口不能约束构造函数
interface ClockConstructor {
  new (hour: number, minute: number)
}

class Clock implements ClockConstructor {
  currentTime: Date
  constructor(h: number, m: number) {}
}
```

可以通过接口约束实例，从而达到约束构造函数的目的。

```ts
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
  tick(): void
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number,
): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)
```

## 混合类型

一个接口可以拥有各种复杂类型的属性和方法，称之为混合类型。

```ts
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  const counter = (start: number) => start.toString()
  counter.interval = 1
  counter.reset = () => {}
  return counter
}
```

## ReadonlyArray\<T>

ReadonlyArray\<T> 保证了一个数组不可给某个元素重新赋值，不可修改其长度，不可使用 push，splice 等方法。

```ts
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12 // 报错
ro.push(5) // 报错
ro.length = 100 // 报错

// 只读数组也不能赋值给其他变量
a = ro // The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'
```

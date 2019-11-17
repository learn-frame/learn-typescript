# 基本类型

## Boolean

```ts
const isFetching: boolean = true
```

## Number

```ts
const decLiteral: number = 6
const hexLiteral: number = 0xf00d
const binaryLiteral: number = 0b1010
const octalLiteral: number = 0o744
```

## String

```ts
const str: string = 'abc'
const sentence: string = `I'm ${str}`
```

## Array

```ts
const arr1: string[] = ['a', 'b', 'c']
const arr2: Array<string> = ['a', 'b', 'c']
```

## Tuple

元组规定数组元素的个数和类型.

```ts
const tuple: [number, string] = [1, '1']
```

元组可以使用 Array 的所有方法, 比如 `tuple.push(2)`, 并且这种操作**不会报错**,
即便 tuple 约束了元素个数和类型, 但是你通过索引取这个新增的元素即报错.

```ts
tuple[2] // TS2493: Tuple type '[number, string]' of length '2' has no element at index '2'.
```

## [Enum](../Enums)

[枚举](../Enums)放到单独一章.

## Any

争取干掉所有 Any...

## Void

在函数中最常见, 当函数没有返回值时, 一般会写成 void.

```ts
function foo(): void {
  console.log('learn TypeScript.')
}
```

此外变量也可以被命名成 void 类型, 但没什么卵用, 因为你只能将它赋值成 undefined.

```ts
const someVoidVariable: void = undefined
```

## Null & Undefined

当你在 tsconfig.json 中将 `strictNullChecks` 设为 false, 就可以将 null 或 undefined
赋值给任何类型, 当然这样是不太建议的.

```ts
// "strictNullChecks": false

const someNum: number = null
const someString: string = undefined
```

## Never

Never 用来定义**永远没有结果**的类型, 如:

```ts
// 死循环
function foo(): never {
  while (true) {
    console.log('do something.')
  }
}
```

```ts
// 抛出异常
function bar(): never {
  throw new Error('something is wrong.')
}
```

## Object

对于对象, 一般来讲很少直接定义 Object 类型, 而是定义成 interface 或 type.

```ts
const obj: object = {}
const obj1: object = '' // Type '""' is not assignable to type 'object'
```

## 类型断言

```ts
interface StringIndex<T> {
  [index: string]: T
}

interface IBanner {
  id: string
  bannerName: string
}

interface IStore {
  allBannerIds: string[]
  bannerById: StringIndex<IBanner>
}

// 方式一 <T>{}
let banners = <IStore>{
  allBannerIds: [],
  bannerById: {},
}

// 方式二 {} as T
let bannerss = {
  allBannerIds: [],
  bannerById: {},
} as IStore
```

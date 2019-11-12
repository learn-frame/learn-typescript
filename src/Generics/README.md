# 泛型

主要是适应泛型的语法...

## 泛型函数

```ts
type Foo = <T>(arg: T) => number

function bar<T>(arg: T): T {
  return arg
}

const foo = <T>(arg: T): T => arg

const bar: { <T>(arg: T): T } = function<T>(arg: T): T {
  return arg
}

const foo: { <T>(arg: T): T } = <T>(arg: T): T => arg
```

## 泛型接口

```ts
interface IRes<T> {
  success: boolean
  code: number
  data: T
  <K>(arg: K): K
}
```

## 泛型类

我在 [leetcode trip](https://github.com/YanceyOfficial/leetcode-trip) 项目中大量使用了泛型类，可以参考。

## 泛型约束

泛型跟 any 不同，它具有一定的约束力。

```ts
interface ILength {
  length: number
}

function getLength<T extends ILength>(value: T) {
  // T 是无法确保 value 拥有 length 这个属性的
  // 因此必须让 TS 知道 value 拥有 length 属性
  return value.length
}
```

### 在泛型约束中使用类型参数

```ts
function getProperty(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, 'a') // okay
getProperty(x, 'm') // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
```

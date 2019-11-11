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

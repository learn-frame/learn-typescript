# 类型守卫

TypeScript 能保证变量在特定区块中是确定的类型，此之谓类型保护。

## 方式

- 通过类型谓词

```ts
// 该函数的返回值是一个类型谓词
function isFish(pet: Fish | Bird): pet is Fish {
  return !!(pet as Fish).swim
}
```

- 使用 instanceof

- 使用 in

- 使用 typeof

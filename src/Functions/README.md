# 函数类型

```ts
type Fn = (index: number) => number

const fn: Fn = (index: number) => index
```

## 函数重载

同名函数根据传入的参数有不同的行为, 称之为函数重载.

```ts
function add(...rest: number[]): number
function add(...rest: string[]): string
function add(...rest: any[]): any {
  const first = rest[0]

  if (typeof first === 'number') {
    return rest.reduce((pre, curr) => pre + curr)
  }

  if (typeof first === 'string') {
    return rest.join('')
  }
}
```

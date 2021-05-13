# 高级类型

## 交叉类型和联合类型

交叉类型：必须符合所有类型

联合类型：只要符合所有类型中的一种

## 索引类型

索引类型的查询操作符 `keyof T`, 它用来获取 T 所有公共属性 key 的联合类型

索引类型的访问操作符 `T[K]`

## 映射类型

> 注: 前四种属于同态转换，最后一种属于非同态转换。非同态类型本质上会创建新的属性。

- `Partial<T>`: 将所有属性设为可选

- `Required<T>`: 将所有属性设为必选

- `Readonly<T>`: 将所有属性设为只读

- `Pick<T, K extends keyof T>`: 抽取 T 的某些属性 K, 并组成新的类型

- `Record<K extends keyof any, T>`: 将指定属性的类型设置为 T

## 条件类型

- `Exclude<T, U>`: 排除 T 存在于 U 的类型的联合类型

- `Extract<T, U>`: 获取 T 和 U 公用类型的联合类型

- `NonNullable<T>`: 排除类型 T 里的 null / undefined 的类型的联合类型

## 扩展

```ts
// 差集
type Diff = Omit<T, keyof K>

// 交集
type Intersection = Pick<T, Extract<keyof T, keyof K>>
```

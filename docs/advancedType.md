# Introducing the Advanced Types of TypeScript

## 映射类型

### Readonly\<T>

将类型 T 的所有属性设为只读。

```ts
// 原理
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
```

```ts
interface Article {
  article_id: string
  title: string
  content: string
}

type T = Readonly<Article>

const o: T = {
  article_id: '',
  title: '',
  content: '',
}

o.article_id = 'other-id' // 报错，article_id 是只读属性
```

### Partial\<T>

将类型 T 的所有属性设为可选。

```ts
// 原理
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

### Required\<T>

将类型 T 的所有属性设为可选。

```ts
// 原理
type Required<T> = {
  [P in keyof T]-?: T[P]
}
```

### Pick<T, K extends keyof T>

抽取 T 的某些属性 K, 并组成新的类型.

```ts
// 原理
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

```ts
interface Article {
  article_id: string
  title: string
  article_content: string
}

interface Comment {
  article_id: string
  comment_id: string
  comment_contet: string
}

type T = Pick<Article, 'title' | 'article_content'>
// 等价于
type T = {
  title: string
  article_content: string
}

type T = Pick<Article, 'title' | '一个不存在的 key'> // 报错

// 两个接口 Pick 可以用来取交集
type T = Pick<Article, keyof Comment>
// 等价于
type T = {
  article_id: string
}
```

### Record\<K extends keyof any, T>

将联合类型 K 的每个属性的类型设置为 T

```ts
// 原理
type Record<K extends keyof any, T> = {
  [P in K]: T
}
```

```ts
interface Article {
  article_id: string
  title: string
  article_content: string
}

type T = Record<'article' | 'post', Article>
// 等价于
type T = {
  article: Article
  post: Article
}
```

> Tips
>
> Readonly，Partial，Required，Pick 属于**同态转换**，Record 属于**非同态转换**。
> 同态转换: 映射只作用于 T 的属性而没有其它的
> 非同态转换: 将 T 作为其他属性的类型 m，非同态转换本质上会创建新的属性

## 条件类型

条件类型的本质就是 `T extends U ? X : Y`，下面是一个基础的例子。

```ts
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object'

type T = TypeName<string>
const t: T = 'string' // t 只能是字符串 'string'
```

**分布式条件类型**是将一个类型 T 扩展成多个类型的联合类型，即 `(A | B | ...) extends U ? X : Y`，它相当于
`A extends U ? X : Y | B extends U ? X : Y | | ... extends U ? X : Y`

### Exclude<T, U>

从 T 中排除可指定给 U 的那些类型。

```ts
// 原理
// T 和 U 共有的被排除，返回 T 有的而 U 没有的
type Exclude<T, U> = T extends U ? never : T
```

```ts
type T = Exclude<'a' | 'b' | 'c', 'a' | 'e'>
// 等价于
type T = Exclude<'a', 'a' | 'e'> | Exclude<'b', 'a' | 'e'> | Exclude<'c', 'a' | 'e'>
type T = never | 'b' | 'c'
type T = 'b' | 'c'
```

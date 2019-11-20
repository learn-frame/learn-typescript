/*
 * 条件类型 T extends U ? X : Y
 */

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

type T1 = TypeName<string>
const t1: T1 = 'string'

/*
 * 分布式条件类型 (A | B) extends U ? X : Y
 * 它相当于 A extends U ? X : Y | B extends U ? X : Y
 */

type T2 = TypeName<string | number>
const t2: T2 = 'number'

/*
 * Exclude<T, U> 排除 T 存在于 U 的类型的联合类型
 */

// 实现原理
// type Exclude<T, U> = T extends U ? never : T;

type T3 = Exclude<'a' | 'b' | 'c', 'a' | 'e'>
// type T3 = Exclude<'a', 'a' | 'e'> | Exclude<'b', 'a' | 'e'> | Exclude<'c', 'a' | 'e'>
// type T3 = never | 'b' | 'c'
// typee T3 = 'b' | 'c'
const t3: T3 = 'b'

/*
 * type Extract<T, U> 获取 T 和 U 公用类型的联合类型
 */

// 实现原理
// type Extract<T, U> = T extends U ? T : never;

type T4 = Extract<'a' | 'b' | 'c', 'a' | 'e'>
const t4: T4 = 'a'

/*
 * NonNullable<T> 排除类型 T 里的 null / undefined 的类型的联合类型
 */

// 实现原理
// type NonNullable<T> = T extends null | undefined ? never : T;

type T5 = NonNullable<string | number | null | undefined>
const t5: T5 = 'a'

/*
 * type Omit<T, K extends keyof any>
 */

// 实现原理
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface XXXX {
  id: number
  name: string
  age: number
}

interface YYYY {
  id: number
  hobbies: string[]
}

type T6 = Omit<XXXX, keyof YYYY>
type T66 = Omit<XXXX, 'id' | 'name'>

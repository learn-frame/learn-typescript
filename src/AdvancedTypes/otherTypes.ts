/*
 * type ReturnType<T extends (...args: any) => any> 获取函数的返回值类型
 */

// 实现原理
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function t7() {
  return {
    id: 1,
    name: 'yancey',
  }
}
type T7 = ReturnType<typeof t7>

type t8 = () => string
type T8 = ReturnType<t8>

type T9 = ReturnType<() => number>

/*
 * type Parameters<T extends (...args: any) => any> 获取函数的参数类型的元组
 */

// 实现原理
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

function t10(
  id: number,
  callBack: Function,
  age = 19,
  name?: string,
  ...args: [boolean, number]
) {
  console.log(id, callBack, age, name, args[0], args[1])
}
type T10 = Parameters<typeof t10> // [number, Function, string | undefined, number | undefined, boolean, number]

t10(1, () => {}, undefined, undefined, true, 1)

/*
 * type ConstructorParameters<T extends new (...args: any) => any> 获取类构造函数的类型的元组
 */

// 实现原理
// type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

class Animal {
  private readonly id: number
  constructor(private readonly name: string, private readonly age?: number) {
    this.age = age
    this.name = name
    this.id = 1
  }
}

type T11 = ConstructorParameters<typeof Animal> // [string, number?]

/*
 * type InstanceType<T extends new (...args: any) => any>
 */

// 实现原理
// type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

type T12 = InstanceType<typeof Animal> // Animal

import { Animal } from './Animal'

// 只有公有属性才能在接口中声明 (只读默认也是公有的)
// 静态/私有/受保护 一概不能在接口中定义
interface IDog {
  // staticVariable: number 静态成员
  // name: string 私有成员
  // age: string 受保护成员
  gender: string
  run(): void
  sleep(): void
}

export class Dog extends Animal implements IDog {
  private name: string
  protected age: number
  readonly gender: string
  static staticVariable = '我是静态变量'
  static staticMethod() {
    console.log('我是静态方法')
  }

  constructor(name: string, age: number, gender: string) {
    super()
    this.name = name
    this.age = age
    this.gender = gender
    // this.staticVariable = staticVariable 静态属性只能通过类调用，不能通过实例，因此不能在构造函数中初始化
  }

  public run() {
    console.log(this.name)
    console.log(this.age)
  }

  public sleep() {
    console.log('sleep')
  }
}

const dog = new Dog('🐱', 18, '男')
// dog.name 私有成员不能在实例中访问
// dog.age 受保护成员不能在实例中访问
// dog.gender = '🚹' 只读属性一旦定义就不能被修改
// dog.staticVariable 静态成员不能通过实例访问
console.log(Dog.staticVariable) // 静态成员只能通过类访问
console.log(Dog.staticMethod()) // 静态成员只能通过类访问

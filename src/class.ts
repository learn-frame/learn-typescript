import { Animal } from './Class/Animal'

// abstract class Animal {
//   eat() {
//     console.log('eat')
//   }

//   // 方法也可以被抽象，但没有抽象属性
//   abstract sleep(): void
// }

// const animal = new Animal() 抽象类不能被实例化，只能被继承

// 只有公有属性才能在接口中声明 (只读默认也是公有的)
// 静态/私有/受保护 一概不能在接口中定义
interface IDog {
  // incoming: number 静态成员
  // name: string 私有成员
  // age: string 受保护成员
  gender: string
  run(): void
  sleep(): void
}

class Dog extends Animal implements IDog {
  private name: string
  protected age: number
  readonly gender: string
  static incoming = 10000
  constructor(name: string, age: number, gender: string) {
    super()
    this.name = name
    this.age = age
    this.gender = gender
    // this.incoming = incoming 静态属性只能通过类调用，不能通过实例，因此不能在构造函数中初始化
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
// dog.incoming 静态成员不能通过实例访问
console.log(Dog.incoming) // 静态成员只能通过类访问

class Husky extends Dog {
  // private color: string 在构造函数的参数中就可以定义修饰符，这样就可以省略这一句声明
  constructor(
    name: string,
    age: number,
    gender: string,
    private color: string,
  ) {
    super(name, age, gender)
    this.color = color
  }

  public fuck() {
    // this.name 私有成员不能在子类中访问
    this.age // 受保护成员能在实例中访问
  }
}

const husky = new Husky('🐶', 18, '女', 'green')
// husky.name 私有成员不能在实例中访问

// 总结
// 私有成员：不能在实例和子类中访问
// 受保护成员：不能在实例中访问，但可以在子类中访问

// 当一个 constructor 是私有的，它既不能被实例化，也不能被继承
// 当一个 constructor 是受保护的，它不能被实例化，但可以被继承 (基类)

// 只读属性在定义后将不能被修改

// 静态属性只能通过类调用，而非实例

// 通过继承抽象类可以实现多态
class Cat extends Animal {
  sleep() {
    console.log('学猫叫')
  }
}

const cat = new Cat()
const animals = [dog, cat]
animals.forEach(i => {
  i.sleep()
})



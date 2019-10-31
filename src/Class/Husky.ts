import { Dog } from './Dog'

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

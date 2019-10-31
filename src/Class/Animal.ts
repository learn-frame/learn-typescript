export abstract class Animal {
  eat() {
    console.log('eat')
  }

  // 方法也可以被抽象
  abstract sleep(): void
}

// const animal = new Animal() 抽象类不能被实例化，只能被继承

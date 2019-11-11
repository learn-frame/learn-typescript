import { Animal } from './Animal'
import { Dog } from './Dog'

// 通过继承抽象类可以实现多态
class Cat extends Animal {
  sleep() {
    console.log('学猫叫')
  }
}

const dog = new Dog('🐱', 18, '男')
const cat = new Cat()
const animals = [dog, cat]
animals.forEach(i => {
  i.sleep()
})

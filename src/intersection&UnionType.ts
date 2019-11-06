interface DogInterface {
  run(): void
}

interface CatInterface {
  jump(): void
}

// 交叉类型：必须符合所有类型
const pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
}

// 联合类型：只要符合一种即可
let strOrNum: string | number = 1
let strOrNum1: 'a' | 'b' | 1 | 2 = 'a'

class Dog implements DogInterface {
  public run() {}
  public eat() {}
}

class Cat implements CatInterface {
  public jump() {}
  public eat() {}
}

enum Gender {
  Boy,
  Girl,
}

function getPet(gender: Gender) {
  // 这里的 pet 被推断为 Cat | Dog
  const pet = gender === Gender.Boy ? new Dog() : new Cat()

  // 所以 pet 只能访问两个类的共有属性和方法
  return pet.eat()
}

// 通过联合类型创建类型保护

enum SharpType {
  Square = 'square',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

interface Square {
  name: SharpType.Square
  sideLength: number
}

interface Rectangle {
  name: SharpType.Rectangle
  width: number
  height: number
}

interface Circle {
  name: SharpType.Circle
  radius: number
}

type Sharp = Square | Rectangle | Circle

function area(s: Sharp) {
  switch (s.name) {
    case SharpType.Square:
      return s.sideLength * s.sideLength
    case SharpType.Rectangle:
      return s.width * s.height
  }
}

// 此时分支语句中没有关于 Circle 的语句
// 因此下面这句会返回
console.log(area({ name: SharpType.Circle, radius: 10 })) // undefined

// 虽然 Sharp 包含了 Circle，但函数并没有作出应有的校验
// 可以通过两种方式解决

// 1) 通过注明函数的返回值类型
function area1(s: Sharp): number {
  switch (s.name) {
    case SharpType.Square:
      return s.sideLength * s.sideLength
    case SharpType.Rectangle:
      return s.width * s.height

    // 当该函数明确定义了返回值类型是 number
    // 不写下面的分支即报错
    case SharpType.Circle:
      return s.radius * s.radius * Math.PI
  }
}

// 2) 通过定义 nerver 类型的立即执行函数
function area2(s: Sharp) {
  switch (s.name) {
    case SharpType.Square:
      return s.sideLength ** 2
    case SharpType.Rectangle:
      return s.width * s.height
    case SharpType.Circle:
      return Math.PI * s.radius ** 2

    // never 代表没有终点的类型
    // 下面的分支中，如果 s 报错，说明程序走到了 default 语句，
    // 也就意味着上面没有覆盖所有的分支
    default:
      return ((e: never) => {
        throw new Error()
      })(s)
  }
}

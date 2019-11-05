interface DogInterface {
  run(): void
}

interface CatInterface {
  jump(): void
}

// 交叉类型
const pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
}

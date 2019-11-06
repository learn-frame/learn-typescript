export interface DogInterface {
  run(): void
}

export interface CatInterface {
  jump(): void
}

// 交叉类型：必须符合所有类型
const pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
}

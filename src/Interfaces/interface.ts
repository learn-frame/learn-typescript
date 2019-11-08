interface IProject {
  readonly _id: number
  projectName: string
  code?: number
}

interface IProjectResult {
  success: boolean
  data: IProject[]
}

const result: IProjectResult = {
  success: true,
  data: [
    // 对象指定了接口，就不能有超出接口之外的字段
    // 下面多出的 projectUrl 会报错
    // { _id: 0, projectName: 'blog cms v1', projectUrl: 'https://yanceyleo.com' },
    { _id: 1, projectName: 'blog cms v2' },
  ],
}

const result1 = {
  success: true,
  data: [
    { _id: 0, projectName: 'blog cms v1', projectUrl: 'https://yanceyleo.com' },
    { _id: 1, projectName: 'blog cms v2' },
  ],
}

// 但当一个函数的参数指定了接口
// 只需要接口是参数的子集即可
const render = (result: IProjectResult) =>
  result.data.map(v => v._id + ' ' + v.projectName + ' ' + v.code)

// 下面两个都可以执行
// 此之谓鸭子类型也
console.log(render(result))
console.log(render(result1))

// 但是你直接把对象实体当作参数就会报错
// render({
//   success: true,
//   data: [
//     { _id: 0, projectName: 'blog cms v1', projectUrl: 'https://yanceyleo.com' },
//     { _id: 1, projectName: 'blog cms v2' },
//   ],
// })

// 因此除了上面将对象赋值给一个变量，触发鸭子鸭子类型，也可以使用「类型断言」
// 1. 第一种类型断言
render({
  success: true,
  data: [
    { _id: 0, projectName: 'blog cms v1', projectUrl: 'https://yanceyleo.com' },
    { _id: 1, projectName: 'blog cms v2' },
  ],
} as IProjectResult)

// 2. 类型断言的第二种方式
// 不过还是第一种更常用
render(<IProjectResult>{
  success: true,
  data: [
    { _id: 0, projectName: 'blog cms v1', projectUrl: 'https://yanceyleo.com' },
    { _id: 1, projectName: 'blog cms v2' },
  ],
})

// 字符串索引签名
interface IResult {
  _id: number
  name: string
  [key: string]: any
}

// 数字索引签名可以对应一个数组

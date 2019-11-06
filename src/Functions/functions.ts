// 可选参数
// 默认参数
// 剩余参数

// 函数重载
function add(...rest: number[]): number
function add(...rest: string[]): string
function add(...rest: any[]): any {
  const first = rest[0]

  if (typeof first === 'number') {
    return rest.reduce((pre, curr) => pre + curr)
  }

  if (typeof first === 'string') {
    return rest.join('')
  }
}

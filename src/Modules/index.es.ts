// 一个 ES 模块可以同时存在一个 export default 和多个 export

// ES 模块无法导入 commonjs 模块的导出
// import someFn from './index.commonjs'

export const esObj = {
  name: 'yancey',
}

export default function() {
  console.log('es default function')
}


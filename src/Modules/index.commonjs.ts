function commonjsFn() {
  console.log('haha')
}

// 一个 commonjs 模块要么有多个 exports, 要么一个 module.exports
// module.exports 会覆盖下面的 exports
module.exports = commonjsFn

exports.a = 1
exports.b = 2

const esFn = require('./index.es')

// commonjs 模块可以导入 ES 模块
// 但使用 ES6 的默认导出时要格外注意
// esFn() TypeError: esFn is not a function

// 因为 ES 模块的默认导出被编译成 commonjs 时
// 会成为整体对象中的 default 属性的属性值
// 所以必须通过 整个对象.default 来使用
esFn.default()

// 上面的方式很反人类
// 因此 ES 模块在导出时, 为防止默认导出被编译成普通导出
// 可采用另一种语法, 详情看 ./export.es.ts

// 此时就可以正常的导入和调用了
const esDefaultFn = require('./export.es')
import esDefaultFn1 = require('./export.es')
esDefaultFn()

// 当然, 当你开启了 "esModuleInterop": true
// 使用 ES 的导入模式也没问题
import esDefaultFn2 from './export.es'
esDefaultFn2()

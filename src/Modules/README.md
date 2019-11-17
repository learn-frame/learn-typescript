# 模块系统

当 target 是 es3 或 es5 时, 生成的模块系统默认为 commonjs

当 target 是 es6+ 时, 生成的模块系统默认为 es 模块

## ES 模块和 Commonjs 模块的兼容性问题

一个 ES 文件, 可以有一个 export default 和多个 export

而 commonjs 文件中, 如果有了 module.exports, 其他的 exports 将失效

ES 模块无法导入 commonjs 模块的导出

commonjs 模块可以导入 ES 模块, 但导入 ES6 的 **export default** 时要格外注意,
因为当 ES 模块被编译成 commonjs 时, 会生成一个对象, 看下面这个例子.

```ts
export const esObj = {
  name: 'yancey',
}

export default function() {
  console.log('es default function')
}
```

当你在 commonjs 中引入 ES 模块的默认属性时, 可能以为 esFn 就代表着默认的导出, 但执行时却发现报错了.

```ts
const esFn = require('./index.es.ts')

esFn() // 报错
```

因为 ES 模块被编译成 commonjs 时, 会被编译成如下结构, 可以看到默认导出的函数成为了该对象中 default 属性的属性值.

```ts
{
  esObj: {
    name: 'yancey',
  },
  default: function() {
    console.log('es default function')
  },
}
```

所以你不得不使用下面的方式来调用这个默认导出.

```ts
const esFn = require('./index.es.ts')

esFn.default() // es default function
```

上面的写法很蛋疼, 因此可以换种语法, 使 ES 模块被编译后, 仍然能保持默认导出的特性.

```ts
// ES 模块可改成这种语法
export = function() {
  console.log('这个导出被编译成 commonjs 时会成为真正的默认导出')
}
```

这样在 commonjs 中导入时, 就可以直接调用了.

```ts
// 两种导入方式都可以
import esDefaultFn = require('./export.es')
const esDefaultFn = require('./export.es.ts')

esDefaultFn() // 这个导出被编译成 commonjs 时会成为真正的默认导出
```

当然, 如果你开启了 `"esModuleInterop": true`, 使用 ES 的导入模式也没问题

```ts
import esDefaultFn2 from './export.es'
esDefaultFn2()
```

其实吧, 回到最上面那个例子, 你在 commonjs 中使用 ES 语法, 也就不需要 default 的方式了...

```ts
import esFn from './index.es'
esFn()
```

所以扯了这么一堆, 只要你开启了 `"esModuleInterop": true`, 就可以正常的在 commonjs 中使用 ES 模块的默认导出了.

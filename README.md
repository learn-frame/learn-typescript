# Learn TypeScript

Learn TypeScript with GeekTime course and [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/).

## Menus

- [基本类型](./src/BasicTypes)

- [枚举](./src/Enums)

- [接口](./src/Interfaces)

- [函数](./src/Functions)

- [类](./src/Classes)

- [泛型](./src/Generics)

- [枚举](./src/Enums)

- [类型兼容性](./src/TypeCompatibility)

- [类型守卫](./src/TypeGuards)

- [高级类型](./src/AdvancedTypes)

- [模块](./src/Modules)

- [命名空间](./src/Namespaces)

- [声明合并](./src/DeclarationMerging)

## Notes

### 静态语言和动态语言

静态类型语言：在**编译**阶段确定所有变量的类型

动态类型语言：在**执行**阶段确定所有变量的类型

### globalThis

TypeScript v3.4 增加了 **globalThis**, 它用于判断一个变量是否为全局变量

```ts
var name = 'yancey'
globalThis.name

const age = 18
globalThis.age // 报错
```

## License

Learn Typescript is licensed under the terms of the [MIT licensed](https://opensource.org/licenses/MIT).

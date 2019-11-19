# 枚举

## 数字类型枚举

如果不指定值, 第一个元素的值默认为 0, 否则按顺序依次加一.

```ts
// 3 4 4 5
enum Direction {
  Up = 3,
  Down,
  Left = 4,
  Right,
}
```

## 字符串类型枚举

```ts
enum Message {
  Success = 'やったー',
  // 如果第一个是字符串类型, 后面的必须赋初值.
  Fail = 'しっぱい',
}
```

## 枚举的反向引用

```ts
enum Color {
  Green,
  Yellow,
  Blue = 'blue',
}

// 上面的枚举会被编译成如下的立即执行函数
'use strict'
var Color
;(function(Color) {
  Color[(Color['Green'] = 0)] = 'Green'
  Color[(Color['Yellow'] = 1)] = 'Yellow'
  Color['Blue'] = 'blue'
})(Color || (Color = {}))

// 该函数的返回值为一个对象
Color: {0: "Green", 1: "Yellow", Green: 0, Yellow: 1, Blue: "blue"}
```

通过上面的例子可以看出, 枚举本质就是一个对象, 因此它可以使用所有的 [Object 的方法](https://js.yanceyleo.com/ES/Object/hasOwnProperty/),
**并且对于属性值是数字的属性, 它可以使用反向引用!!!**

```ts
Week[Week.Monday] // 'Monday'
Week[1] // 'Monday'
```

## 可计算的枚举

```ts
enum Type {
  // 常量枚举成员, 在编译阶段就被计算了
  a,
  b = Week.Thursday,
  c = 1 + 1,
  // 可计算的枚举成员, 需要等到执行阶段
  d = Math.random(),
  e = 'abc'.length,
}

// 如上被编译成

'use strict'
var Types
;(function(Types) {
  // 常量枚举成员, 在编译阶段就被计算了
  Types[(Types['a'] = 0)] = 'a'
  Types[(Types['b'] = Week.Thursday)] = 'b'
  Types[(Types['c'] = 2)] = 'c'
  // 可计算的枚举成员, 需要等到执行阶段
  Types[(Types['d'] = Math.random())] = 'd'
  Types[(Types['e'] = 'abc'.length)] = 'e'
})(Types || (Types = {}))
```

## 常量枚举

常量枚举会在编译阶段被移除, 当不需要对象, 而只需要对象的值的时候可以使用常量枚举

```ts
const enum ConstEnum {
  UP,
  DOWN,
}
```

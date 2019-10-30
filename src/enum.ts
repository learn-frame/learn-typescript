// 0 1 2 3
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 1 2 3 4
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

// 0 1 4 5
enum Direction2 {
  Up,
  Down,
  Left = 4,
  Right,
}

// 1 2 4 5
enum Direction3 {
  Up = 1,
  Down,
  Left = 4,
  Right,
}

// value 既可以是 number，也可以是字符串
enum Message {
  Success = 'やったー',
  Fail = 'しっぱい',
}

enum Week {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

// 反向引用
const monday = Week[Week.Monday]
console.log(monday)

// 枚举成员的性质
enum Type {
  // 常量枚举成员，在编译阶段就被计算了
  a,
  b = Week.Thursday,
  c = 1 + 1,
  // 可计算的枚举成员，需要等到执行阶段
  d = Math.random(),
  e = 'abc'.length,
}

/*
 * "use strict";
 * var Type;
 * (function (Type) {
 *     // 常量枚举成员，在编译阶段就被计算了
 *     Type[Type["a"] = 0] = "a";
 *     Type[Type["b"] = Week.Thursday] = "b";
 *     Type[Type["c"] = 2] = "c";
 *     // 可计算的枚举成员，需要等到执行阶段
 *     Type[Type["d"] = Math.random()] = "d";
 *     Type[Type["e"] = 'abc'.length] = "e";
 * })(Type || (Type = {}));
 */

// 常量枚举会在编译阶段被移除
// 当不需要对象，而只需要对象的值的时候可以使用常量枚举
const enum ConstEnum {
  UP,
  DOWN,
}

// 枚举也可以作为一种类型
// 基本也没这么用的。。。
enum TypedEnum {
  UP,
  DOWN,
}

const up: TypedEnum = 1

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
```

## 常量枚举

常量枚举会在编译阶段被移除, 当不需要对象, 而只需要对象的值的时候可以使用常量枚举

```ts
const enum ConstEnum {
  UP,
  DOWN,
}
```

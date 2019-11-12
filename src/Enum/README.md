# 枚举

## 数字类型枚举

如果不指定值，第一个元素的值默认为 0，否则按顺序依次加一。

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
  // 如果第一个是字符串类型，后面的必须赋初值。
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

## 混合类型枚举

## 可计算的枚举

## 常量枚举

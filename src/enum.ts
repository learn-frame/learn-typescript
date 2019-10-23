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

// 0 1 3 4
enum Direction2 {
  Up,
  Down,
  Left = 3,
  Right,
}

// 1 2 4 5
enum Direction3 {
  Up = 1,
  Down,
  Left = 4,
  Right,
}

// value 既可以是 number 当有一个为字符串时
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

const monday = Week[Week.Monday]
console.log(monday)
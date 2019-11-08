interface All {
  id: string
  name: string
  age: number
  incoming: number
}

interface Store {
  id: string
  name: string
  otherId: string
  videoId: string
}

// interface IRest {
//   age: number
//   incoming: number
// }

const all = {
  id: '1',
  name: '1',
  age: 18,
  incoming: 18,
}

const store = {
  id: '1',
  name: '2',
  otherId: '3',
  videoId: '4',
}

// 差集
type Diff = Omit<All, keyof Store>

// 交集
type Union = Pick<All, Extract<keyof All, keyof Store>>

type Ins = Pick<All, Extract<keyof All, keyof Store>>

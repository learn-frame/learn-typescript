interface T {
  id: string
  name: string
  avatar: string
  url: string
}

interface K {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

// 差集
type Diff = Omit<T, keyof K>

// 交集
type Intersection = Pick<T, Extract<keyof T, keyof K>>

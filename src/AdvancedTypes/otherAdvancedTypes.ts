// 差集
type Diff = Omit<T, keyof K>

// 交集
type Union = Pick<T, Extract<keyof T, keyof K>>

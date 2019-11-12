interface IMapItem {
  name: string
  latitude: number
  longitude: number
}

/*
 * Readonly<T> 将所有属性设为只读
 */

// 实现原理
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };
type ReadonlyMapItem = Readonly<IMapItem>

/*
 * Partial<T> 将所有属性设为可选
 */

// 实现原理
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
type PartialMapItem = Partial<IMapItem>

/*
 * Pick<T> 抽取 T 的某些属性 K, 并组成新的类型
 */

// 实现原理
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };
type PickMapItem = Pick<IMapItem, 'latitude' | 'longitude'>

// -----------------------
// 上面几种映射类型转换是同态的，因为映射只作用于 T 的属性而没有其它的。
// -----------------------

/*
 * Pick<T> 抽取 T 的某些属性 K, 并组成新的类型，它是非同态的
 */

// 实现原理
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };
type RecordMapItem = Record<'positionGroup', IMapItem>

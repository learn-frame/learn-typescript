import moment from 'moment'

// 没有 doSomething 方法, 肯定报错
// moment.doSomething()

declare module 'moment' {
  export function doSomething(): void
}

moment.doSomething = function() {
  console.log('hello, moment')
}
/// <reference path="A.ts" />
/// <reference path="B.ts" />

console.log(Area.squareArea(10))
console.log(Area.circleArea(10))

// 别名
import squareArea = Area.squareArea

// 可以通过下面的指令将命名空间打包
// tsc --outFile ./src/Namespace/sample.js ./src/Namespace/C.ts
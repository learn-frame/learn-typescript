# 命名空间

用于封装一个模块, 对外暴露一个名字, 避免过多的变量污染, 它本质上被编译成一个立即执行函数.

```ts
var Area
;(function(Area) {
  var PI = Math.PI
  Area.circleArea = function(radiu) {
    return PI * Math.pow(radiu, 2)
  }
})(Area || (Area = {}))
var Area
;(function(Area) {
  Area.squareArea = function(side) {
    return Math.pow(side, 2)
  }
})(Area || (Area = {}))
```

## 命名空间别名

引用一个命名空间内的属性或方法都必须使用命名空间进行调用, 可以通过别名的方式进行书写的简化.

```ts
// 不使用别名
Area.circleArea(10)

// 使用别名
import squareArea = Area.squareArea
squareArea(10)
```

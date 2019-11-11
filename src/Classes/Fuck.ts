class Fuck {
  static slogan = 'fuck yeah!'

  public handleFuckChange() {
    // 通过类名访问静态属性
    console.log(Fuck.slogan)
  }
}

// 通过类名访问静态属性
console.log(Fuck.slogan)

const fuck = new Fuck()
// 不可通过实例访问静态属性
// fuck.slogan

class SlowlyFuck extends Fuck {}
// 静态属性可被继承
console.log(SlowlyFuck.slogan)

# 类

## 修饰符一览

public: [用于修饰类的成员] 可以被实例化和继承

private: [用于修饰类的成员] 不能被实例化和继承

protected: [用于修饰类的成员] 不能被实例化，但可以被继承

readonly: [用于修饰类的成员] 初始化后不能被修改

static: [用于修饰类的成员] 只能通过类名调用，不可被实例化，可以被继承

abstract: [用于修饰类] 抽象类不能被实例化，只能被继承

## 链式调用

```ts
class WorkFlow {
  public step1() {
    console.log('天才第一步')
    return this
  }

  public step2() {
    console.log('雀式纸尿裤')
    return this
  }
}

const workFlow = new WorkFlow()
workFlow.step1().step2()
```

// 链式调用
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

// 子类继承父类后也可以链式调用
class MyWorkFlow extends WorkFlow {
  public say() {
    console.log('扯')
    return this
  }
}

const myWorkFlow = new MyWorkFlow()
myWorkFlow
  .step1()
  .step2()
  .say()
  .step1()
  .step2()

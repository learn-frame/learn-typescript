// 全局模块 (通过 script 标签引用的)

function globalLib(options) {
  console.log(options)
}

globalLib.version = '1.0.0'

globalLib.someFn = () => {
  console.log('say anything')
}

const version = '1.0.1'

function doSomething() {
  console.log('say anything')
}

function moduleLib() {
  console.log('module lib')
}

moduleLib.version = version
moduleLib.doSomething = doSomething

module.exports = moduleLib

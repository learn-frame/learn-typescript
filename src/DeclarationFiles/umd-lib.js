;(function(root, factory) {
  if (typeof define === 'function' && define.umd) {
    define(factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.umdLib = factory()
  }
})(this, function() {
  return {
    version: '1.1.1',
    doSomething() {
      console.log('umd module')
    },
  }
})

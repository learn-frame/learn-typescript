const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api/**/*'), {
    target: 'http://localhost:3002',
    pathRewrite(path) {
      return path.replace('/api', '/')
    },
  })
}

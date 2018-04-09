require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var router = express.Router()
var request = require('superagent')
var bodyParser = require('body-parser')
var webpack = require('webpack')
var history = require('connect-history-api-fallback')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: console.log,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

router.all(config.dev.proxy, (req, res) => {
  // req.url = req.url.split(config.split)[1]
  var method = req.method
  var sreq = request(method, config.dev.uri + req.url)
    .timeout(5000)
  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    sreq.set('Content-Type', 'application/json;charset=UTF-8')
    if (req.body) {
      sreq = sreq.send(req.body)
    }
  }
  sreq.end(function (err, sres) {
    if (err) {
      res.send({
        head: {
          errcode: err.code || err.status,
          errmsg: err.message
        }
      })
    } else if (sres.body) {
      res.send(sres.body)
    }
  })
})

app.all('*', router)
app.use(history({
  index: config.dev.index,
  verbose: true,
  logger: console.log.bind(console)
}))

// handle fallback for HTML5 history API
// app.use(history({
//   rewrites: [{
//     from: '/', // 正则或者字符串
//     to: '/app.html', // 字符串或者函数
//   }]
// }))

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
    // opn(uri + '/app.html')
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}

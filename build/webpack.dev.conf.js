var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var entries = utils.getEntry()
var chunks = Object.keys(entries)
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors', // 公共模块的名称
        chunks: chunks, // chunks是需要提取的模块
        minChunks: chunks.length
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

for (var pathname in entries) {
  // 配置生成的html文件，定义路径等
  var conf = {
      filename: pathname + '.html',
      template: 'index.html', // 模板路径
      chunks: ['vendors', pathname],
      inject: true // js插入位置

  }
  // https://github.com/ampedandwired/html-webpack-plugin
  module.exports.plugins.push(new HtmlWebpackPlugin(conf))
}

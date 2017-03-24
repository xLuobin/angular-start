/**
 * Created by X.Jason on 2017/3/23.
 */
const webpack = require('webpack')
const path = require('path')
const baseConfig = require('./base.js')
const config = require('../config.json')

let devConfig = baseConfig
devConfig.devServer = {
  contentBase: path.join(__dirname, '/dist'),
  proxy: {
    '/api/*': {
      target: config.server,
      changeOrigin: true,
      secure: true
    }
  },
  compress: false,
  port: 5000
}
devConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"develop"'
    }
  })
)
devConfig.stats = 'errors-only'

module.exports = devConfig

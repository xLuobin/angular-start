/**
 * Created by X.Jason on 2017/3/23.
 */
const webpack = require('webpack')
const baseConfig = require('./base.js')

let prodConfig = baseConfig
prodConfig.plugins = baseConfig.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
])
module.exports = prodConfig

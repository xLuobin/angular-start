/**
 * Created by X.Jason on 2017/3/23.
 */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

let webpackConfig = {
  target: 'web',
  profile: true,
  entry: {
    app: path.join(__dirname, '../src/launch.jit.ts'),
    polyfill: path.join(__dirname, '../src/polyfill.ts')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.css', '.scss', '.html']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      favicon: path.join(__dirname, `../src/favicon.ico`),
      template: path.join(__dirname, '../src/index.html'),
      inject: 'body',
      hash: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: 2
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    ),
    new ExtractTextPlugin('./[name].css')
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader!sass-loader?sourceMap',
          fallback: 'style-loader'
        })
      },
      {test: /\.html$/, exclude: /node_modules/, use: 'html-loader'},
      {test: /\.json$/, exclude: /node_modules/, use: 'json-loader'},
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: './images/[name].[ext]'
          }
        }
      },
      {
        test: /\.woff|\.woff2|\.svg|\.eot|\.ttf/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: './fonts/[name].[ext]'
          }
        }
      }
    ]
  }
}

module.exports = webpackConfig

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  target: 'electron-renderer',
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      title: 'Output Management'
    })
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: [
            'transform-decorators-legacy', 'transform-runtime', 'add-module-exports',
            ['import', { libraryName: 'antd', style: true }], // `style: true` 会加载 less 文件
          ]
        }
      }]
    }, {
      test: /\.(jpg|png|gif|ico)$/,
      loader: 'url-loader',
      options: {
        limit: 6144,
        name: '[name].[ext]'
      },
      exclude: /node_modules/,
    }, {
      test: /\.less$|\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          minimize: true,
          importLoaders: 1,
          // localIdentName: '[name]__[local]__[hash:base64:8]'
        }
      }, {
        loader: 'less-loader',
        // options: { modifyVars: theme }
      }]
    }]
  },
  resolve: { extensions: ['.js', '.json', '.scss'] },
}

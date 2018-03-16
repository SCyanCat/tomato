const webpack = require('webpack')

module.exports = {
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
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
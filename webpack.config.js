const path = require('path')

const publidDir = path.resolve(__dirname, 'public');
const srcRoot = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: publidDir,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env', '@babel/react']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      srcRoot
    ],
    alias: {
      '@': srcRoot
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: publidDir
  }
};

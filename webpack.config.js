const path = require('path');

module.exports = {
  entry: './src/index.js',

  /*Getting started
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },*/
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
}
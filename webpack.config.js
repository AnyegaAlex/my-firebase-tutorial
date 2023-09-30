const path = require('path')

module.exports = {
  mode: 'development', //can be specified to production or development
  entry: './src/index.js', //path to the entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true
}
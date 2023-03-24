const path = require('path')

module.exports = [
{
  mode: 'development',
  entry: './public/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'index.bundle.js'
  },
  watch: true
},
{
    mode: 'development',
    entry: './public/js/chat.js',
    output: {
      path: path.resolve(__dirname, 'public/build'),
      filename: 'chat.bundle.js'
    },
    watch: true
},
{
    mode: 'development',
    entry: './public/js/login.js',
    output: {
      path: path.resolve(__dirname, 'public/build'),
      filename: 'login.bundle.js'
    },
    watch: true
},]
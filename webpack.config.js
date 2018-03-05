const path = require('path');

module.exports = {
  entry: './src/popup.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(dist, 'dist')
  },
  mode: 'development'
};



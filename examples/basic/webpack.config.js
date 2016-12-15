var path = require('path');

module.exports = {
  entry: 'index.js',
  output: 'bundle.js',
  resolveLoader: {
    alias: {
      'paper-loader': path.join(__dirname, "../../index")
    }
  },
  module: {
    loaders: [
      {
        test: /\.paper\.js$/,
        loader: 'paper-loader'
      }
    ]
  }
};

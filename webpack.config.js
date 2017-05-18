const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    'left-pad': [
      'babel-polyfill',
      './src/left-pad.js',
    ]
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
    ]
  },
  output: {
    path: path.resolve(__dirname, 'functions'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2',
  }
};

const precss       = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './public/scripts/index.js',
  output: {
    path: './public/dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  }
}
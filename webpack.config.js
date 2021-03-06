const path = require('path');

const webpackConfig = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, './client/static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
};

webpackConfig.module.loaders.push({
  test: /\.js$|\.jsx$/,
  exclude: /node_moduçles/,
  loader: 'babel-loader',
  options: {
    presets: ['es2015', 'react'],
    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
  },
});

webpackConfig.module.loaders.push({
  test: /\.(css)$|\.scss$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader'],
});

module.exports = webpackConfig;

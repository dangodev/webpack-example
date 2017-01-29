const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  entry: {
    index: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  plugins: [
    new ExtractTextPlugin('app.bundle.css'),
  ],
  resolve: {
    extensions: ['.js'],
  },
};

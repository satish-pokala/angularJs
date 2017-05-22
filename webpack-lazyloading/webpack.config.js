var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'bootstrap': './app/Main/main.ts',
  },
  output: {
    path:'./dist',
    publicPath: './dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts/,loaders:['ts-loader','angular2-router-loader'],exclude:/node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },

  plugins: [
      new CleanWebpackPlugin(['dist'])
    ]
};
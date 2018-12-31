'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {

  context: __dirname,
  mode: 'development',
  entry: {
    vendor: './src/vendor.js',
    app: './src/entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        {loader: "style-loader"},
        {loader: 'css-loader'},
        {loader: 'postcss-loader'},
        {loader: 'sass-loader'}
      ]
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader'
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/,
      options: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/public'
    }])
  ],
  devServer: {
    contentBase: './src/public',
    stats: 'minimal',
    host: '0.0.0.0'
  }
};

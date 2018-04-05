const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common,{
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin()
      ],
});
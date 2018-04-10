const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/bootstrap.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist/',
        compress: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                include: path.join(__dirname, '/src/'),
                use: [
                    'style-loader',
                    'typings-for-css-modules-loader?modules&namedExport&camelCase',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                include: path.join(__dirname, '/src/'),
                use: ['ts-loader']
            }
        ]
    },
    plugins: [
        new webpack.WatchIgnorePlugin([/\.d\.ts$/]),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['.css', '.scss', '.ts', '.tsx', '.js']
    }
}
var path = require('path');
const webpack = require('webpack');

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
                    'css-loader',
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
    resolve: {
        extensions: ['.css', '.scss', '.ts', '.tsx', '.js']
    }
}
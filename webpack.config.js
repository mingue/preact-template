var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/bootstrap',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                include: path.join(__dirname, 'src'),
                use: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.tsx?$/,
                include: path.join(__dirname, 'src'),
                use: ['ts-loader']
            }
        ]
    }
}
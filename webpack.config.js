var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/bootstrap.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss?$/,
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
        extensions: ['.css', '.scss', '.ts', '.tsx', '.js'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    }
}
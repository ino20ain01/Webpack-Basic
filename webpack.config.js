const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    }, 
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules'
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                loader: 'file-loader',
                test: /\jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
            'Popper': ['popper.js', 'default'],
        })
    ]
}

module.exports = config;
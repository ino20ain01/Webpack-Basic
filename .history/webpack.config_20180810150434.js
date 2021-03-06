const path = require('path');
const webpack = require('webpack');
const VENDOR_LIBS = [
    'axios',
    'bootstrap',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk',
];
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        filename: '[name].js',
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
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                }),
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
        }),
        new ExtractTextPlugin('style.css')
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 2
                }
            } 
        }
    }
}

module.exports = config;
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
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const devServer = {
    port: 6868,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: true,
    stats: 'minimal',
    inline: true,
    compress: true,
    contentBase: '/',
    noInfo: true,
    clientLogLevel: 'none',
    overlay: {
        errors: true
    },
    proxy: {
        "**": "http://localhost:9090"
    }
}

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, 'dist'),
    }, 
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js[x]?$/,
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
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ManifestPlugin({
            writeToFileEmit: true
        })
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
    },
    devServer
}

module.exports = config;
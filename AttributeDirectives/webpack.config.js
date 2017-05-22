/*
 * Copyright (C) 2016, Ever Team Software
 *
 * The program(s) herein may be used and/or copied only with
 * the written permission of Ever Team Software or in accordance with
 * the terms and conditions stipulated in the agreement/contract
 * under which the program(s) have been supplied.
 * @author : Satish Pokala
 * @date   : 22 Sep,2016
 */
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

const config = {
    entry:{
        app:"./app/main",
        vendor:"./app/vendor"
    },
    output: {
        path:path.resolve('./dist/'),
        publicPath: 'dist/',
        filename: '[name].bundle.js',
        chunkFilename: './chunks/[id].[hash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.ts/,loaders:['ts-loader','angular2-router-loader', 'angular2-template-loader'],
                exclude:/node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|pdf|png|jpg|gif)([\?]?.*)$/,
                loader: 'file-loader?name=./images/[hash].[ext]'
            },
            {
                test: /\.(eot|woff2?|ttf|otf)([\?]?.*)$/,
                loader: 'file-loader?name=./fonts/[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js','.css'],
        modules: [
            'node_modules'
        ]
    },
    devtool: false,
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(['dist'])
    ]
};

module.exports = config;

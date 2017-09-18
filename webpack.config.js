/*
* @Author: Marte
* @Date:   2017-09-12 23:17:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-16 10:29:13
*/

const webpack = require('webpack');

const path = require('path');
// 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var __DEV__ = process.env.NODE_ENV === 'dev'
var config = {
    entry:{
        bundle:path.resolve(__dirname,'app/app.module.js'),
        vendor:['angular']
    },
    output:{
        filename:'[name].js',
        path:__dirname+'/build'
    },
    resolve:{
        extensions:['.js','.json']
    },
    // 用来处理热启动端口
    devServer:{
        port:8080,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.html/,
                use:'raw-loader'
            },{
                test:/\.js/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{presets:['es2015']}
                    }
                ],
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader','css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader'

                    },
                    'less-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:10000,
                            name:'./images/[name].[ext]'
                        }
                    }

                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [{
                    loader:'file-loader',
                    options: {
                        name: './fonts/[name].[ext]'
                    }
                }]
            }
        ]
    }
}
// if(__DEV__){
    config.devtool = '#eval-source-map';
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({soruceMap:true}),//命令行-p会和此处重复导致bug
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename:'vendor.js'
        }),
        new HtmlWebpackPlugin({
            template:__dirname+'/app/index.html'
        }),
        // new ExtractTextPlugin('style.[hash:8].css')
    ]
// }

module.exports = config;
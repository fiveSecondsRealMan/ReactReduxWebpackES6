/**
 * webpack开发环境配置文件
 */

'use strict';

var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

// 静态资源路径
var host = 'localhost';
var port = 8080;
var localPublicPath = 'http://' + host + ':' + port;

webpackConfig.output.publicPath = localPublicPath;
webpackConfig.entry.app.unshift('webpack-dev-server/client?' + localPublicPath);

new WebpackDevServer(webpackConfig, {
    hot: true,
    inline: true, // 命令行启动
    compress: true, // 显示进度
    stats: {
        colors: true
    },
    historyApiFallback: true // h5无刷新改变页面url
}).listen(port, host, function () {
    console.log(localPublicPath);
});
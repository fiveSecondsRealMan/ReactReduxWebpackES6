/**
 * webpack开发环境配置文件
 */

'use strict';

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

/**
 * 静态资源路径
 */
const protocol = 'http://';
const [ , , host, port ] = process.argv;
const publicPath = protocol + host + ':' + port;

webpackConfig.output.publicPath = publicPath;
webpackConfig.entry.app.unshift('webpack-dev-server/client?' + publicPath);

/**
 * js文件热替换
 */

webpackConfig.entry.app.unshift('webpack/hot/only-dev-server');
webpackConfig.module.loaders[0].loaders.unshift('react-hot');
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

(new WebpackDevServer(webpack(webpackConfig), {
    hot: true,
    inline: true, // 命令行启动
    compress: true, // 显示进度
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true // h5无刷新改变页面url
})).listen(port, host, function () {
    console.log(localPublicPath);
});
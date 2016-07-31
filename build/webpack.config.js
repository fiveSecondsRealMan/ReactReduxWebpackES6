/**
 * webpack基础配置文件
 */

'use strict';

var webpack = require('webpack');
var path = require('path');

// 项目根路径
var __ROOTPATH__ = path.resolve(__dirname, '..');

// 项目源码路径
var __SRCPATH__ = path.resolve(__ROOTPATH__, 'src');

// 项目生产路径
var __DISTPATH__ = path.resolve(__ROOTPATH__, 'dist');

// 是否为开发环境
var __ISDEV__ = process.env.NODE_ENV !== 'production';


// 资源路径别名Map
var resourcePathAlias = {};

// 添加components资源别名
Object.assign(resourcePathAlias, {
    components: __SRCPATH__ + 'components'
});

// 添加js资源别名
Object.assign(resourcePathAlias, {
    js: __SRCPATH__ + 'js'
});

// 添加css资源别名
Object.assign(resourcePathAlias, {
    css: __SRCPATH__ + 'css'
});

// 添加img资源别名
Object.assign(resourcePathAlias, {
    img: __SRCPATH__ + 'img'
});
'use strict';

const electron = require('electron');
let mainBrowserWindow = null;

/**
 * 域名、端口、完整路径
 */
const protocol = 'http://';
const [ , , host, port ] = process.argv;
const publicPath = protocol + host + ':' + port;

/**
 * 系统模块
 * app：应用声明周期
 * BrowserWindow：创建浏览器窗口
 */

const { app, BrowserWindow } = electron;

/**
 * electron初始化完毕，开始初始化窗口并渲染web页面，完成交互功能
 */

app.on('ready', () => {
    // 初始化窗口
    mainBrowserWindow = new BrowserWindow({ width: 800, height: 600 });

    // 加载远程页面资源
    mainBrowserWindow.loadURL(publicPath);

    // 打开开发者工具页面
    mainBrowserWindow.webContents.openDevTools();

    mainBrowserWindow.on('closed', () => {
        mainBrowserWindow = null;
    });
});

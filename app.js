/* 应用入口文件 */

// 加载模块
var express = require('express');
var config = require('./config');
var site = require('./controllers/site');
var user = require('./controllers/user');

// 使用Express MVC框架
var app = express();

// 指定静态文检目录
app.use(config.static_virtual_dir, express.static(config.static_real_dir));

// 路由 http://www.expressjs.com.cn/guide/routing.html
// '/' 
app.get('/', site.index)

// 启动服务并从指定端口监听连接请求
app.listen(config.port, function () {
	console.log(' listening at http://%s:%s', config.host, config.port);
});
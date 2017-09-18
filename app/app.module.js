/*
* @Author: atheist
* @Date:   2017-09-13 00:05:17
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-18 12:22:25
* @comments :入口文件
*/

const angular = require('angular');
const route = require('angular-ui-router')
const lib = require('./lib/lib.module')
const page = require('./lib/page.module')
const bootstrap = require('angular-ui-bootstrap');
// 加载路由监控功能
const run = require('./lib/app.run');
// 加载配置
const config = require('./lib/app.config')
// 加载服务
const service = require('./service/service.module')
// 加载自定义指令
const myFooter = require('./directive/myFooter.directive');
//加载主css样式
import './less/main.less';

var app = angular.module("app",[
    lib,
    service,
    page,
    route,
    bootstrap
]).config(config)
.directive('myHeader',function(){
    return {
        restrict:'AECM',
        replace:false,
        templateUrl:'../app/views/template/head.html'
    }
})
.directive('myFooter',myFooter)
.run(run)


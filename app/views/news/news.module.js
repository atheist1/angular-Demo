const angular = require('angular');
const NewsCtrl = require('./news.controller');
const route = require('./news.route');
module.exports = angular.module('news',[])
       .controller('NewsCtrl',NewsCtrl)
       .config(route)
       .name

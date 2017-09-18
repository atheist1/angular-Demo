const angular = require('angular');
const route = require('./main.route');
const MainCtrl = require('./main.controller');
const navBar = require('../../directive/navBar.directive')
module.exports = angular.module('main',[])
                .controller('MainCtrl',MainCtrl)
                .config(route)
                .directive('navbar',navBar)
                .name;


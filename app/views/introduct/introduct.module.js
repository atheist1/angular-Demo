const angular = require('angular');
const route = require('./introduct.route');
const IntroductCtrl = require('./introduct.controller');
module.exports = angular.module('introduct',[])
                .controller('IntroductCtrl',IntroductCtrl)
                .config(route)
                .name;


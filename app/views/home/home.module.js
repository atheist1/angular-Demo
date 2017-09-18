var angular = require('angular');
var route = require('./home.route');
var HomeCtrl = require('./home.controller');

module.exports = angular
    .module('home', [])
    .config(route)
    .controller('HomeCtrl', HomeCtrl)
    .name;

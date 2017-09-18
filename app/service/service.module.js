var angular = require('angular');
var config = require("./config.service");
var http = require("./http.service");

module.exports = angular.module('service', [])
  .service("http",http)
  .constant('config', config)
  .name
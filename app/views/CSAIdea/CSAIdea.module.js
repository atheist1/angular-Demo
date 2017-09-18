const angular = require('angular');
const route = require('./CSAIdea.route');
const IdeaCtrl = require('./CSAIdea.controller');
module.exports = angular.module('CSAIdea',[])
                .controller('IdeaCtrl',IdeaCtrl)
                .config(route)
                .name;


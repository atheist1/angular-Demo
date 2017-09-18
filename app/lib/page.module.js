// 包含自己所编写的模块
const angular = require('angular');
const home = require('../views/home/home.module');
const main = require('../views/main/main.module')
const introduct = require('../views/introduct/introduct.module');
const CSAIdea = require('../views/CSAIdea/CSAIdea.module');
const news = require('../views/news/news.module')
module.exports = angular.module('page', [
  home,
  main,
  introduct,
  CSAIdea,
  news
]).name

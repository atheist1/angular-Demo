/*function config($locationProvider, $urlRouterProvider , $httpProvider) {
    // $locationProvider.html5Mode(true)
    // 当我们访问的是一个无效的url的时候，跳转到/
    $urlRouterProvider.otherwise('/')
}

config.$inject = ['$locationProvider', '$urlRouterProvider','$httpProvider']

module.exports = config*/
function config($locationProvider, $urlRouterProvider , $httpProvider) {
    // $locationProvider.html5Mode(true)
    // 一出来就跳到home
    $urlRouterProvider.otherwise('/')
}

config.$inject = ['$locationProvider', '$urlRouterProvider','$httpProvider']

module.exports = config


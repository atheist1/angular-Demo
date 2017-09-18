function route($stateProvider){
    $stateProvider.state('news',{
        url:'/news',
        parent:'main',
        template:require('./news.html'),
        controller:require('./news.controller')
    })
}
route.$inject = ['$stateProvider'];
module.exports = route;
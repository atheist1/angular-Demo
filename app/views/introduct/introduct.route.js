function route($stateProvider){
    $stateProvider.state('introduct',{
        // 当页面访问到'/'时进入home页面，而home页面的父页面是main，渲染main
        url:'/introduct',
        parent:'main',
        template:require('./introduct.html'),
        controller:require('./introduct.controller')
    })
}
route.$inject = ['$stateProvider'];
module.exports = route;

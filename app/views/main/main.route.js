function route($stateProvider){
    $stateProvider.state('main',{
        // 当页面访问到'/'时进入home页面，而home页面的父页面是main，渲染main
        url:'/main',
        // parent:'home',
        template:require('./main.html'),
        controller:require('./main.controller')
    })
}
route.$inject = ['$stateProvider'];
module.exports = route;

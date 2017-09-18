function route($stateProvider){
    $stateProvider.state('CSAIdea',{
        // 当页面访问到'/'时进入home页面，而home页面的父页面是main，渲染main
        url:'/CSAIdea',
        parent:'main',
        template:require('./CSAIdea.html'),
        controller:require('./CSAIdea.controller')
    })
}
route.$inject = ['$stateProvider'];
module.exports = route;

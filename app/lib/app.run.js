function run($state, $rootScope) {
    // 当跳转发生的时候，去监听路由的变化
    $state.go("home");
    $rootScope.isActive = 'home';
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState){
      // console.log(toState)
      // event.preventDefault();
        // toState ：我们跳转的页面的路由信息
        // fromState：我们从哪个页面发生跳转的路由信息
        // toParams：获取页面跳转时的参数
        // 当访问的是登录界面时，直接派发
        /*if(toState.name === "login"){
            return;
        }
        // 未登录的逻辑判断
        if(!$cookies.getObject("auth")){
            // 阻止页面跳转的默认事件
            event.preventDefault();
            // 手动的跳转到登录界面
            $state.go("login");
        }*/
        $rootScope.isActive = toState.name;
        switch(toState.name){
            case 'introduct':
            $rootScope.firstName = 'CSA农场';
            $rootScope.firstState = 'introduct';
            $rootScope.secName = '农场介绍';
            $rootScope.secState = 'introduct';
            break;
            case 'CSAIdea':
            $rootScope.firstName = 'CSA农场';
            $rootScope.firstState = 'idea';
            $rootScope.secName = 'CSA理念';
            $rootScope.secState = 'idea';
            break;
            case 'news':
            $rootScope.firstName = '农场新闻';
            $rootScope.secName = '';
            $rootScope.firstState = 'news';
            $rootScope.secState = 'news';
            break;
        }
    })
}

run.$inject = ['$state', '$rootScope'];

module.exports = run;
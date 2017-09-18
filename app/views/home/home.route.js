function route($stateProvider) {
    $stateProvider.state('home', {
        url:"/home",
        template: require('./home.html'),
        controller: require('./home.controller')
    });
}

route.$inject = ['$stateProvider'];

module.exports = route;
var module = angular.module('app', [ 'api', 'ngAnimate', 'ui.router' ]),
    factory = module.factory,
    run = module.run,
    forEach = angular.forEach,
    copy = angular.copy,
    controller = module.controller,
    filter = _.filter,
    map = _.map,
    contains = _.contains,
    isArray = angular.isArray,
    isUndefined = angular.isUndefined,
    isString = angular.isString,
    noop = angular.noop;

module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl:'templates/app/home.html',
                controller:'HomeCtrl'
            });
}]);






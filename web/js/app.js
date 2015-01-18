/*
 * app v 1.0.0a (build 20150118_113743_942)
 */

(function(window, angular, _) {
    'use strict';


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






controller('HomeCtrl', ['$scope','widgetService', function ($scope, widgetService) {

        var ctrl = this;

        ctrl.getWidgetSuccess = function(results){
            $scope.widgets = results;
        };

        ctrl.getWidgetFailure = function(){
            $scope.errorText = 'A problem occurred getting the widgets!';
        };

         widgetService.getWidgets().then(ctrl.getWidgetSuccess, ctrl.getWidgetFailure);
    }
]);



})(window, window.angular, window._);
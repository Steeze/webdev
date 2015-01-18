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

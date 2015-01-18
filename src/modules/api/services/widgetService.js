factory('widgetService', ['$http', function ($http) {

    function onSuccess(result){
        var data = result.data;
        return data;
    }

    return {
        getWidgets: function(){
            return $http.get(apiBaseUrl + '/v1/Widgets/')
                .then(onSuccess);
        },
        getWidgetId: function(id) {
            return $http.get(apiBaseUrl + '/v1/Widgets/'+id)
                .then(function (result) {
                    return result.data;
                });
        }
    };

}]);
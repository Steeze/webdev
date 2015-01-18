describe('api widgetService', function(){
   var widgetService,
       $httpBackend;

    beforeEach(function(){
       module('api');

        inject(function(_widgetService_, _$httpBackend_){
            widgetService = _widgetService_;
            $httpBackend = _$httpBackend_;
        });
    });

    describe('getWidgets()', function () {
        it('should return the widgets', function(){
            $httpBackend.expectGET(apiConfig.baseUrl + '/v1/Widgets/').respond({});
            var result = widgetService.getWidgets();
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });

});
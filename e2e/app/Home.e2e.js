describe('app homepage  list', function() {
    it('should display a list', function() {
        browser.get('/app/#/home');

        var widgetList = element.all(by.repeater('widget in widgets'));
        expect(widgetList.count()).toEqual(7);
        expect(widgetList.get(2).getText()).toContain('widgetThree - widget three description');
    });
});
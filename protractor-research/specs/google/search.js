
describe('Search Google with keyword: ', function(){
    var txbSearch = element(by.id('lst-ib'));
    var btnSearch = element(by.name('btnK'));

    beforeEach(function(){
        // Setting : disable wait for angular
        browser.waitForAngularEnabled(false)
        browser.get('http://www.google.com')
    });

    it('Protractor tutorial', function(){
        txbSearch.sendKeys('Protractor tutorial');
        btnSearch.click();
        expect(browser.getTitle()).toContain('Protractor tutorial');
    });

    it('Kungfu Panda', function(){
        txbSearch.sendKeys('Kungfu Panda');
        btnSearch.click();
        expect(browser.getTitle()).toContain('Kungfu Panda');
    });


});
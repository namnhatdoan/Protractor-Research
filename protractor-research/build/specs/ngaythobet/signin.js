"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var urlChanged = require('../../utils/browserHelper').urlChanged;
// function(url) {
//     return function () {
//       return browser.getCurrentUrl().then(function(actualUrl) {
//         return url == actualUrl;
//       });
//     };
// };
var signInPage = require('../../pages/ngaythobet/signInPage');
describe('Log In NgayThoBet application with ', function () {
    const txbUser = protractor_1.element(protractor_1.by.name('username'));
    const txbPass = protractor_1.element(protractor_1.by.name('password'));
    const btnSignIn = protractor_1.element(protractor_1.by.name('signin'));
    const lblName = protractor_1.element(protractor_1.by.xpath("//*[@role='menu']/preceding::button[img]"));
    beforeEach(function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('http://192.168.55.189:8081');
    });
    // function signIn(username, password){
    //     txbUser.clear();
    //     txbUser.sendKeys(username);
    //     txbPass.clear();
    //     txbPass.sendKeys(password);
    //     btnSignIn.click();
    // }
    it('normal user', function () {
    });
    it('admin account', function () {
        signInPage.signIn('admin', 'Admin@123');
        // Wait for navigation to dashboard with url http://192.168.55.189:8081/dashboard
        protractor_1.browser.wait(urlChanged("http://192.168.55.189:8081/dashboard"), 10000);
        // Expectation
        expect(protractor_1.browser.getCurrentUrl()).toContain("http://192.168.55.189:8081/dashboard");
        expect(lblName.getAttribute("innerText")).toMatch('Administrator User');
    });
});

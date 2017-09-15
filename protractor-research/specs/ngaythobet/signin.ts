import {element, by, browser} from 'protractor';
//import {signInPage} from '../../pages/ngaythobet/signInPage'

import * as chai from 'chai';

var urlChanged = require('../../utils/browserHelper').urlChanged
// function(url) {
//     return function () {
//       return browser.getCurrentUrl().then(function(actualUrl) {
//         return url == actualUrl;
//       });
//     };
// };

var signInPage = require('../../pages/ngaythobet/signInPage')

describe('Log In NgayThoBet application with ', function(){
    const txbUser = element(by.name('username'));
    const txbPass = element(by.name('password'));
    const btnSignIn = element(by.name('signin'));
    const lblName = element(by.xpath("//*[@role='menu']/preceding::button[img]"));
    
    beforeEach(function() {
        browser.waitForAngularEnabled(false)
        browser.get('http://192.168.55.189:8081')
    });
      
    // function signIn(username, password){
    //     txbUser.clear();
    //     txbUser.sendKeys(username);
    //     txbPass.clear();
    //     txbPass.sendKeys(password);
    //     btnSignIn.click();
        
    // }

    it('normal user', function(){
        
    });

    it('admin account', function(){
        signInPage.signIn('admin', 'Admin@123')
        // Wait for navigation to dashboard with url http://192.168.55.189:8081/dashboard
        browser.wait(urlChanged("http://192.168.55.189:8081/dashboard"), 10000);
        // Expectation
        expect(browser.getCurrentUrl()).toContain("http://192.168.55.189:8081/dashboard")
        expect(lblName.getAttribute("innerText")).toMatch('Administrator User');
    });
});

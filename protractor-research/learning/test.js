"use strict";
exports.__esModule = true;
var chrome = require("selenium-webdriver/chrome");
var driver = chrome.Driver.createSession();
//driver.get('http://www.google.com')
function getURL(url) {
    driver.get(url);
}
var url = "http://www.facebook.com";
getURL(url);
driver.quit();

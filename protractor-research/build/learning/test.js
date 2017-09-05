"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome = require("selenium-webdriver/chrome");
const driver = chrome.Driver.createSession();
//driver.get('http://www.google.com')
function getURL(url) {
    driver.get(url);
}
var url = "http://www.facebook.com";
getURL(url);
driver.quit();

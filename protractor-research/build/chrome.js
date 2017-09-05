"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome = require("selenium-webdriver/chrome");
const driver = chrome.Driver.createSession();
driver.get("http://www.google.com");
driver.quit();

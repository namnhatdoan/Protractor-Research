import * as chrome from 'selenium-webdriver/chrome';

const driver = chrome.Driver.createSession();
driver.get("http://www.google.com");
driver.quit();
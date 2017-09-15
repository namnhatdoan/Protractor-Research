import {browser} from 'protractor'

export function urlChanged(url) {
    return function () {
      return browser.getCurrentUrl().then(function(actualUrl) {
        return url == actualUrl;
      });
    };
};

export function selectFromDatePicker(date:Date){
  
}
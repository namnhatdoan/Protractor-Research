"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
function urlChanged(url) {
    return function () {
        return protractor_1.browser.getCurrentUrl().then(function (actualUrl) {
            return url == actualUrl;
        });
    };
}
exports.urlChanged = urlChanged;
;
function selectFromDatePicker(date) {
}
exports.selectFromDatePicker = selectFromDatePicker;

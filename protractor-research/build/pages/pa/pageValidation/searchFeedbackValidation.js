"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const searchFeedbackPage = require('../pageObject/searchFeedbackPage').searchFeedbackPage;
class searchFeedbackValidation {
    constructor() {
        this.searchFeedbackPageObj = new searchFeedbackPage();
        this.listMessage = protractor_1.element.all(protractor_1.by.css(".noty_text"));
    }
    verifySuccessMessageDisplay() {
        protractor_1.element.all(protractor_1.by.css(".noty_text")).then(value => {
            value[0].getWebElement().getText().then(actualMessage => {
                expect(actualMessage).toBe(searchFeedbackValidation.SUCCESS_MSG);
            });
        });
    }
    verifyButtonIsDisabled(button) {
        button.isEnabled().then(isEnabled => {
            expect(isEnabled).toBe(false);
        });
    }
    verifyButtonIsEnabled(button) {
        button.isEnabled().then(isEnabled => {
            expect(isEnabled).toBe(true);
        });
    }
}
searchFeedbackValidation.SUCCESS_MSG = "Search sucessfully.";
// Id of button
searchFeedbackValidation.BTN_NEW = "new";
searchFeedbackValidation.BTN_OPEN = "open";
exports.searchFeedbackValidation = searchFeedbackValidation;

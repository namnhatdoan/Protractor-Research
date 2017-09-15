"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const signInPage = require('../pageObject/signInPage').signInPage;
class signInValidation {
    constructor() {
        this.signInPageObj = new signInPage();
        // Element
        this.lastMes = protractor_1.element(protractor_1.by.xpath("//*[@id='noty_topCenter_layout_container']//li[last()]"));
        this.pageMsg = protractor_1.element(protractor_1.by.id("pageMessage"));
    }
    verifyMessageIsDisplayed(expectedMsg) {
        if (expectedMsg == signInValidation.INCORRECT_CREDENTIAL) {
            this.pageMsg.getAttribute("innerText").then(actualMsg => {
                expect(actualMsg).toBe(expectedMsg);
            });
        }
        else if (expectedMsg == signInValidation.EMPTY_PASSWORD || expectedMsg == signInValidation.EMPTY_USERNAME) {
            this.lastMes.getAttribute("innerText").then(actualMsg => {
                expect(actualMsg).toBe(expectedMsg);
            });
        }
        else {
            console.log("Expected Message is not valid.");
        }
    }
}
// Message
signInValidation.EMPTY_USERNAME = "Username may not be empty.";
signInValidation.EMPTY_PASSWORD = "Password may not be empty.";
signInValidation.INCORRECT_CREDENTIAL = "Incorrect credentials, please try again.";
exports.signInValidation = signInValidation;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class signInPage {
    constructor() {
        // Element
        this.txbUsername = protractor_1.element(protractor_1.by.id("username"));
        this.txbPassword = protractor_1.element(protractor_1.by.id("password"));
        this.btnSignIn = protractor_1.element(protractor_1.by.id("btnSubmit"));
        console.log("Creating a new SignInPageObject");
    }
    signIn(username, password) {
        this.txbUsername.clear();
        this.txbUsername.sendKeys(username);
        this.txbPassword.clear();
        this.txbPassword.sendKeys(password);
        this.btnSignIn.click();
    }
}
exports.signInPage = signInPage;

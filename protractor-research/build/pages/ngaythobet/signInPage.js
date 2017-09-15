"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const txbUser = protractor_1.element(protractor_1.by.name('username'));
const txbPass = protractor_1.element(protractor_1.by.name('password'));
const btnSignIn = protractor_1.element(protractor_1.by.name('signin'));
const lblName = protractor_1.element(protractor_1.by.xpath("//*[@role='menu']/preceding::button[img]"));
function signIn(username, password) {
    txbUser.clear();
    txbUser.sendKeys(username);
    txbPass.clear();
    txbPass.sendKeys(password);
    btnSignIn.click();
}
exports.signIn = signIn;

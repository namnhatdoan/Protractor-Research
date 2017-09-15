"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class topPanel {
    constructor() {
        this.userPanel = protractor_1.element(protractor_1.by.css(".user_cpanel"));
        this.btnLogOut = protractor_1.element(protractor_1.by.css(".user_cpanel a"));
    }
    signOut() {
        this.btnLogOut.click();
    }
}
exports.topPanel = topPanel;

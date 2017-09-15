"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topPanel = require('../pageObject/topPanel').topPanel;
class topPanelValidation {
    constructor() {
        this.topPanelObj = new topPanel();
    }
    verifyWelcomeMsg(username) {
        this.topPanelObj.userPanel.getAttribute('innerText').then(function (value) {
            expect(value).toMatch('Welcome, ' + username);
        });
    }
}
exports.topPanelValidation = topPanelValidation;

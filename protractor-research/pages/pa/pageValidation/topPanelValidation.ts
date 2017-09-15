import {browser } from 'protractor'
const topPanel = require('../pageObject/topPanel').topPanel;


export class topPanelValidation{
    private topPanelObj = new topPanel();

    public verifyWelcomeMsg(username: string):any{
        this.topPanelObj.userPanel.getAttribute('innerText').then(function(value){
            expect(value).toMatch('Welcome, '+ username);
        });
    }
}
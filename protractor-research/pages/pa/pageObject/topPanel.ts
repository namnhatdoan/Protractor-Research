import {element, by, browser, $} from 'protractor';

export class topPanel{
    public userPanel = element(by.css(".user_cpanel"));
    public btnLogOut = element(by.css(".user_cpanel a"));

    constructor(){

    }

    public signOut():void{
        this.btnLogOut.click();
    }
}
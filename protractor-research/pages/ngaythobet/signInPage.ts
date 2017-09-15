import {element, by, browser} from 'protractor';

const txbUser:any = element(by.name('username'));
const txbPass:any = element(by.name('password'));
const btnSignIn:any = element(by.name('signin'));
const lblName:any = element(by.xpath("//*[@role='menu']/preceding::button[img]"));

export function signIn(username, password):void{
    txbUser.clear();
    txbUser.sendKeys(username);
    txbPass.clear();
    txbPass.sendKeys(password);
    btnSignIn.click();
}

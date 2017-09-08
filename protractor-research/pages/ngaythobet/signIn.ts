import {element, by, browser} from 'protractor';

class signInPage{
    txbUser:any = element(by.name('username'));
    txbPass:any = element(by.name('password'));
    btnSignIn:any = element(by.name('signin'));
    lblName:any = element(by.xpath("//*[@role='menu']/preceding::button[img]"));

    public signIn(username, password):void{
        this.txbUser.clear();
        this.txbUser.sendKeys(username);
        this.txbPass.clear();
        this.txbPass.sendKeys(password);
        this.btnSignIn.click();
    }
}


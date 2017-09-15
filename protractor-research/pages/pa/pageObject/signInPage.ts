import {element, by, browser} from 'protractor'

export class signInPage{
    // Element
    private txbUsername = element(by.id("username"))
    private txbPassword = element(by.id("password"))
    private btnSignIn = element(by.id("btnSubmit"))

    constructor() {
        console.log("Creating a new SignInPageObject")
    }

    public signIn(username:string, password:string):void{
        this.txbUsername.clear()
        this.txbUsername.sendKeys(username)

        this.txbPassword.clear()
        this.txbPassword.sendKeys(password)

        this.btnSignIn.click()
    }
}



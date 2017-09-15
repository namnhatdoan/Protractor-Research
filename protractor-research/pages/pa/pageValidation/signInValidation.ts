import {browser, element, by} from 'protractor'
const signInPage = require('../pageObject/signInPage').signInPage;

export class signInValidation{
    private signInPageObj = new signInPage();

    // Message
    public static EMPTY_USERNAME : string = "Username may not be empty.";
    public static EMPTY_PASSWORD : string = "Password may not be empty.";
    public static INCORRECT_CREDENTIAL : string = "Incorrect credentials, please try again.";
    
    // Element
    private lastMes = element(by.xpath("//*[@id='noty_topCenter_layout_container']//li[last()]"))
    private pageMsg = element(by.id("pageMessage"));

    public verifyMessageIsDisplayed(expectedMsg : string){
        if (expectedMsg == signInValidation.INCORRECT_CREDENTIAL){  // This message is displayed inside pageMsg
            this.pageMsg.getAttribute("innerText").then(actualMsg => {
                expect(actualMsg).toBe(expectedMsg);
            })
        }
        else if(expectedMsg == signInValidation.EMPTY_PASSWORD || expectedMsg == signInValidation.EMPTY_USERNAME){  // These message is displayed inside popup message
            this.lastMes.getAttribute("innerText").then(actualMsg => {
                expect(actualMsg).toBe(expectedMsg);
            })
        }
        else {
            console.log("Expected Message is not valid.")
        }
    }
}
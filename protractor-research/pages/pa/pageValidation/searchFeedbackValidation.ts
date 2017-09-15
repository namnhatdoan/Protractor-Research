import {browser, element, by, ElementFinder} from 'protractor'
const searchFeedbackPage = require('../pageObject/searchFeedbackPage').searchFeedbackPage;

export class searchFeedbackValidation{
    public static SUCCESS_MSG = "Search sucessfully.";

    // Id of button
    public static BTN_NEW = "new";
    public static BTN_OPEN = "open";
    
    private searchFeedbackPageObj = new searchFeedbackPage();
    private listMessage = element.all(by.css(".noty_text"));

    public verifySuccessMessageDisplay(){
        element.all(by.css(".noty_text")).then(value=>{
            value[0].getWebElement().getText().then(actualMessage => {
                expect(actualMessage).toBe(searchFeedbackValidation.SUCCESS_MSG);
            })
        })
    }

    public verifyButtonIsDisabled(button:ElementFinder){
        button.isEnabled().then(isEnabled => {
            expect(isEnabled).toBe(false);
        })
    }
    public verifyButtonIsEnabled(button:ElementFinder){
        button.isEnabled().then(isEnabled => {
            expect(isEnabled).toBe(true);
        })
    }
}
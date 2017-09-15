import {browser, element, by, ElementFinder} from 'protractor'
const dpkHelper = require('../../../utils/dpkHelper').dpkHelper;

export class provideFeedbackPage{
    public static FOR_MYSELF = 0;
    public static FOR_OTHER = 1;

    // Web Element
    private selProvideFBFor = element(by.id("Feedback_ProvideFBFor"));

    private selEmployee = element(by.id("Feedback_Receiver"));
    private txbEmployee = element(by.xpath("//*[@id='Feedback_Receiver']/following-sibling::input"));
    
    private ckbShortFB = element(by.id("quickfeedback"));
    private ckbFullFB = element(by.id("usingtemplate"));

    private txbCreateDate = element(by.id("Feedback_CreatedDate"));
    private dpkCreateDate = element(by.xpath("//*[@id='Feedback_CreatedDate']/following-sibling::img"));

    private btnSave = element(by.buttonText("Save"));
    private btnSubmit = element(by.buttonText("Submit"));

    // Datepicker
    private dpk = new dpkHelper(element(by.id("ui-datepicker-div")), this.dpkCreateDate)

    constructor(){
        browser.waitForAngularEnabled(false);
    }
    // Getter
    public getEmployeeTextbox():ElementFinder{
        return this.txbEmployee;
    }

    public getShortFeedbackCheckbox():ElementFinder{
        return this.ckbShortFB;
    }
    public getFullFeedbackCheckbox():ElementFinder{
        return this.ckbFullFB;
    }

    public getProvideFBForSelect():ElementFinder{
        return this.selProvideFBFor;
    }
    /*
     *  Choose option in Provide Feedback For: Myself or Other Colleague
     */ 
    private async selectFBFor(fbFor: any){
        await this.selProvideFBFor.click();
        if (fbFor === provideFeedbackPage.FOR_OTHER){
            element(by.xpath("//select[@id='Feedback_ProvideFBFor']/option[@value=1]")).click()
        }
        else {
            element(by.xpath("//select[@id='Feedback_ProvideFBFor']/option[@value=0]")).click()
        }
    }

    private async setContent(content: string){
        //let frame = browser.findElement(by.xpath("//iframe"));
        try {
            let frame = await element(by.xpath("//iframe")).getWebElement();
            await browser.driver.switchTo().frame(frame).then(value => {
                let txaContent = element(by.id("tinymce"));
                txaContent.clear();
                txaContent.sendKeys(content);
                browser.driver.switchTo().defaultContent();
            }, function(err) {
                console.log("switch failed by :");
                console.log(err);
            })
        } catch (e){
            console.log("ERROR in set Content")
            console.log(e)
        }
        
    }

    public async getContent(){
        try {
            let result:string = "";
            let frame = await element(by.xpath("//iframe")).getWebElement();
            await browser.driver.switchTo().frame(frame).then(value => {
                let txaContent = element(by.id("tinymce"));
                txaContent.getText().then(function(text){
                    result = text;
                })
                browser.driver.switchTo().defaultContent();
            }, err => {
                console.log("ERROR in Get Content")
                console.log(err)
                result = ""
            });
            return result;
        } catch (err){
            console.log(err)
            return ""
        }
    }

    /*
     *  enter a short feedback with fbFor, employee Name, create date, content and attachment
     */
    public async enterShortFB(fbFor:any, employee:string, createDate:Date, content:string, attach:string){
        this.ckbFullFB.click();
        this.ckbShortFB.click();
        await this.selectFBFor(fbFor);
        if (fbFor == provideFeedbackPage.FOR_OTHER){
            await this.txbEmployee.clear();
            this.txbEmployee.sendKeys(employee);
        }
        await this.dpkCreateDate.click();
        await this.dpk.selectDate(createDate);

        await this.setContent(content);
    }

    public enterFullFB(fbFor:any, employee:string, createDate:Date, content:any, attach:string) {

    }

    public saveFB(){
        this.btnSave.click();
    }
}
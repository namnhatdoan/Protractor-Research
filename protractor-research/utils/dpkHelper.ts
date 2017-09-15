import {browser, by, element, ElementFinder} from 'protractor'

export class dpkHelper{
    private dpkElement: ElementFinder;
    private lnkOpen: ElementFinder;

    private selMonth: ElementFinder;
    private selYear: ElementFinder;

    constructor(dpkElement: ElementFinder, lnkOpen: ElementFinder){
        this.dpkElement = dpkElement;
        this.lnkOpen = lnkOpen;
        this.init();
    }

    private init(){
        this.selMonth = this.dpkElement.element(by.className('ui-datepicker-month'));
        this.selYear = this.dpkElement.element(by.className('ui-datepicker-year'));
    }
    /*
     *  Open datepicker if it isn't displayed
     */
    private async openDpk(){
        this.dpkElement.isDisplayed().then((isDispl) =>{
            if (!isDispl){
                this.lnkOpen.click();
            }
        });
    }

    public async selectDate(date:Date){
        if (date && date != null){
            //await this.openDpk();
                    
            await this.selYear.click();
            await this.selYear.element(by.xpath('./option[@value='+ date.getFullYear() + ']')).click();
                            
            await this.selMonth.click();
            await this.selMonth.element(by.xpath('./option[@value='+ date.getMonth() +']')).click();
                    
            await this.dpkElement.element(by.xpath('//*[@id="ui-datepicker-div"]//td[.='+ date.getDate() +']')).click();
        }
    }

}
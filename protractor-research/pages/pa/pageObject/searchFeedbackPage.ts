import {browser, element, by, ElementArrayFinder} from 'protractor'
const dpkHelper = require('../../../utils/dpkHelper').dpkHelper;

export class searchFeedbackPage {
    // Value of each option
    public static MY_FEEDBACK_FOR_OTHER : number = 1;
    public static FEEDBACK_FOR_ME : number = 2;
    public static FEEDBACK_FOR_MY_SUBORDINATE : number = 3;
    public static FEEDBACK_FOR_MY_COACH : number = 4;

    // ID of each status
    public static DRAFT : string = "cbxStatusDraft";
    public static PENDING : string = "cbxStatusPending";
    public static APPROVED : string = "cbxStatusApproved";
    public static DISAPPROVED : string = "cbxStatusRejected";

    private selViewOption = element(by.id("viewOption"));
    private selEmployee = element(by.id("cbEmployee"));
    private txbEmployee = element(by.xpath("//*[@id='cbEmployee']/following-sibling::input"))
    private txbDateFrom = element(by.id("datepickerFrom"));
    private txbDateTo = element(by.id("datepickerTo"));
    
    private btnSearch = element(by.id("btnSearch"));
    private btnOpen = element(by.id("open"));
    private btnNew = element(by.id("open"));

    private gridFeedbackList = element(by.id("gbox_list"));

    private imgDateFrom = element(by.xpath("//*[@id='datepickerFrom']/following-sibling::img"))
    private imgDateTo = element(by.xpath("//*[@id='datepickerTo']/following-sibling::img"))

    private dpkDateFrom = new dpkHelper(element(by.xpath("//*[ @id='ui-datepicker-div' and .//a[contains(@onclick,'datepickerFrom')]]")), this.imgDateFrom);
    private dpkDateTo = new dpkHelper(element(by.xpath("//*[ @id='ui-datepicker-div' and .//a[contains(@onclick,'datepickerTo')]]")), this.imgDateTo);

    
    //Getter
    public getOpenButton(){
        return this.btnOpen;
    }

    public getNewButton(){
        return this.btnNew;
    }

    public async getFeedbacks(receiver:string,date:Date, status:string, provider: string){
        let datestr = "0" +(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        let xpath = "//*[@id='list']//tr[./td[@aria-describedby='list_Fullname' and text()='" + receiver +"'] and ./td[@aria-describedby='list_StatusText'  and text()='"+ status +"'] and ./td[@aria-describedby='list_Date' and text()='"+ datestr +"'] and ./td[@aria-describedby='list_ProviderName'  and text()='"+ provider +"']]/td/input";
        return element.all(by.xpath(xpath));
    }

    /*
     * params: option is one of: MY_FEEDBACK_FOR_OTHER, FEEDBACK_FOR_ME,
     *                           FEEDBACK_FOR_MY_SUBORDINATE, FEEDBACK_FOR_MY_COACH
     */
    public selectOption(option){
        this.selViewOption.click();
        this.selViewOption.element(by.xpath("./option[@value= "+ option +"]")).click();
    }
    
    public selectStatus(status:string[]){
        // let ckbDraft = element(by.id("cbxStatusDraft"));
        // let ckbPending = element(by.id("cbxStatusPending"));
        // let ckbApproved = element(by.id("cbxStatusApproved"));
        // let ckbDisapproved = element(by.id("cbxStatusRejected"));
        
        status.forEach(stt => {
            let checkbox = element(by.id(stt));
            checkbox.isSelected().then(isSelected =>{
                if (!isSelected){
                    checkbox.click();
                }
            });
        });
    }
    /*
     * viewOpt: MY_FEEDBACK_FOR_OTHER, FEEDBACK_FOR_ME, FEEDBACK_FOR_MY_SUBORDINATE, FEEDBACK_FOR_MY_COACH
     * status : DRAFT, PENDING, APPROVED, DISAPPROVED
     */
    public async searchFeedback(viewOpt : number, employeeName : string, dateFrom : Date, dateTo : Date, status : string[]){
        this.selectOption(viewOpt);
        this.selectStatus(status);
        if (viewOpt != searchFeedbackPage.FEEDBACK_FOR_ME) {
            this.txbEmployee.clear();
            this.txbEmployee.sendKeys(employeeName);
        }

        // Set date
        // await Promise.all([this.imgDateFrom.click(),
        //     this.dpkDateFrom.selectDate(dateFrom),
        //     this.imgDateTo.click(),
        //     this.dpkDateTo.selectDate(dateTo) ])
        await this.imgDateFrom.click();
        await this.dpkDateFrom.selectDate(dateFrom);
        await this.imgDateTo.click();
        await this.dpkDateTo.selectDate(dateTo);
        await this.btnSearch.click();
    }

}
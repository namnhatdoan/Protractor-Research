"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const dpkHelper = require('../../../utils/dpkHelper').dpkHelper;
class searchFeedbackPage {
    constructor() {
        this.selViewOption = protractor_1.element(protractor_1.by.id("viewOption"));
        this.selEmployee = protractor_1.element(protractor_1.by.id("cbEmployee"));
        this.txbEmployee = protractor_1.element(protractor_1.by.xpath("//*[@id='cbEmployee']/following-sibling::input"));
        this.txbDateFrom = protractor_1.element(protractor_1.by.id("datepickerFrom"));
        this.txbDateTo = protractor_1.element(protractor_1.by.id("datepickerTo"));
        this.btnSearch = protractor_1.element(protractor_1.by.id("btnSearch"));
        this.btnOpen = protractor_1.element(protractor_1.by.id("open"));
        this.btnNew = protractor_1.element(protractor_1.by.id("open"));
        this.gridFeedbackList = protractor_1.element(protractor_1.by.id("gbox_list"));
        this.imgDateFrom = protractor_1.element(protractor_1.by.xpath("//*[@id='datepickerFrom']/following-sibling::img"));
        this.imgDateTo = protractor_1.element(protractor_1.by.xpath("//*[@id='datepickerTo']/following-sibling::img"));
        this.dpkDateFrom = new dpkHelper(protractor_1.element(protractor_1.by.xpath("//*[ @id='ui-datepicker-div' and .//a[contains(@onclick,'datepickerFrom')]]")), this.imgDateFrom);
        this.dpkDateTo = new dpkHelper(protractor_1.element(protractor_1.by.xpath("//*[ @id='ui-datepicker-div' and .//a[contains(@onclick,'datepickerTo')]]")), this.imgDateTo);
    }
    //Getter
    getOpenButton() {
        return this.btnOpen;
    }
    getNewButton() {
        return this.btnNew;
    }
    getFeedbacks(receiver, date, status, provider) {
        return __awaiter(this, void 0, void 0, function* () {
            let datestr = "0" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
            let xpath = "//*[@id='list']//tr[./td[@aria-describedby='list_Fullname' and text()='" + receiver + "'] and ./td[@aria-describedby='list_StatusText'  and text()='" + status + "'] and ./td[@aria-describedby='list_Date' and text()='" + datestr + "'] and ./td[@aria-describedby='list_ProviderName'  and text()='" + provider + "']]/td/input";
            return protractor_1.element.all(protractor_1.by.xpath(xpath));
        });
    }
    /*
     * params: option is one of: MY_FEEDBACK_FOR_OTHER, FEEDBACK_FOR_ME,
     *                           FEEDBACK_FOR_MY_SUBORDINATE, FEEDBACK_FOR_MY_COACH
     */
    selectOption(option) {
        this.selViewOption.click();
        this.selViewOption.element(protractor_1.by.xpath("./option[@value= " + option + "]")).click();
    }
    selectStatus(status) {
        // let ckbDraft = element(by.id("cbxStatusDraft"));
        // let ckbPending = element(by.id("cbxStatusPending"));
        // let ckbApproved = element(by.id("cbxStatusApproved"));
        // let ckbDisapproved = element(by.id("cbxStatusRejected"));
        status.forEach(stt => {
            let checkbox = protractor_1.element(protractor_1.by.id(stt));
            checkbox.isSelected().then(isSelected => {
                if (!isSelected) {
                    checkbox.click();
                }
            });
        });
    }
    /*
     * viewOpt: MY_FEEDBACK_FOR_OTHER, FEEDBACK_FOR_ME, FEEDBACK_FOR_MY_SUBORDINATE, FEEDBACK_FOR_MY_COACH
     * status : DRAFT, PENDING, APPROVED, DISAPPROVED
     */
    searchFeedback(viewOpt, employeeName, dateFrom, dateTo, status) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield this.imgDateFrom.click();
            yield this.dpkDateFrom.selectDate(dateFrom);
            yield this.imgDateTo.click();
            yield this.dpkDateTo.selectDate(dateTo);
            yield this.btnSearch.click();
        });
    }
}
// Value of each option
searchFeedbackPage.MY_FEEDBACK_FOR_OTHER = 1;
searchFeedbackPage.FEEDBACK_FOR_ME = 2;
searchFeedbackPage.FEEDBACK_FOR_MY_SUBORDINATE = 3;
searchFeedbackPage.FEEDBACK_FOR_MY_COACH = 4;
// ID of each status
searchFeedbackPage.DRAFT = "cbxStatusDraft";
searchFeedbackPage.PENDING = "cbxStatusPending";
searchFeedbackPage.APPROVED = "cbxStatusApproved";
searchFeedbackPage.DISAPPROVED = "cbxStatusRejected";
exports.searchFeedbackPage = searchFeedbackPage;

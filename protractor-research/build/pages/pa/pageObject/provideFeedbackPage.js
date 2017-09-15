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
class provideFeedbackPage {
    constructor() {
        // Web Element
        this.selProvideFBFor = protractor_1.element(protractor_1.by.id("Feedback_ProvideFBFor"));
        this.selEmployee = protractor_1.element(protractor_1.by.id("Feedback_Receiver"));
        this.txbEmployee = protractor_1.element(protractor_1.by.xpath("//*[@id='Feedback_Receiver']/following-sibling::input"));
        this.ckbShortFB = protractor_1.element(protractor_1.by.id("quickfeedback"));
        this.ckbFullFB = protractor_1.element(protractor_1.by.id("usingtemplate"));
        this.txbCreateDate = protractor_1.element(protractor_1.by.id("Feedback_CreatedDate"));
        this.dpkCreateDate = protractor_1.element(protractor_1.by.xpath("//*[@id='Feedback_CreatedDate']/following-sibling::img"));
        this.btnSave = protractor_1.element(protractor_1.by.buttonText("Save"));
        this.btnSubmit = protractor_1.element(protractor_1.by.buttonText("Submit"));
        // Datepicker
        this.dpk = new dpkHelper(protractor_1.element(protractor_1.by.id("ui-datepicker-div")), this.dpkCreateDate);
        protractor_1.browser.waitForAngularEnabled(false);
    }
    // Getter
    getEmployeeTextbox() {
        return this.txbEmployee;
    }
    getShortFeedbackCheckbox() {
        return this.ckbShortFB;
    }
    getFullFeedbackCheckbox() {
        return this.ckbFullFB;
    }
    getProvideFBForSelect() {
        return this.selProvideFBFor;
    }
    /*
     *  Choose option in Provide Feedback For: Myself or Other Colleague
     */
    selectFBFor(fbFor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.selProvideFBFor.click();
            if (fbFor === provideFeedbackPage.FOR_OTHER) {
                protractor_1.element(protractor_1.by.xpath("//select[@id='Feedback_ProvideFBFor']/option[@value=1]")).click();
            }
            else {
                protractor_1.element(protractor_1.by.xpath("//select[@id='Feedback_ProvideFBFor']/option[@value=0]")).click();
            }
        });
    }
    setContent(content) {
        return __awaiter(this, void 0, void 0, function* () {
            //let frame = browser.findElement(by.xpath("//iframe"));
            try {
                let frame = yield protractor_1.element(protractor_1.by.xpath("//iframe")).getWebElement();
                yield protractor_1.browser.driver.switchTo().frame(frame).then(value => {
                    let txaContent = protractor_1.element(protractor_1.by.id("tinymce"));
                    txaContent.clear();
                    txaContent.sendKeys(content);
                    protractor_1.browser.driver.switchTo().defaultContent();
                }, function (err) {
                    console.log("switch failed by :");
                    console.log(err);
                });
            }
            catch (e) {
                console.log("ERROR in set Content");
                console.log(e);
            }
        });
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = "";
                let frame = yield protractor_1.element(protractor_1.by.xpath("//iframe")).getWebElement();
                yield protractor_1.browser.driver.switchTo().frame(frame).then(value => {
                    let txaContent = protractor_1.element(protractor_1.by.id("tinymce"));
                    txaContent.getText().then(function (text) {
                        result = text;
                    });
                    protractor_1.browser.driver.switchTo().defaultContent();
                }, err => {
                    console.log("ERROR in Get Content");
                    console.log(err);
                    result = "";
                });
                return result;
            }
            catch (err) {
                console.log(err);
                return "";
            }
        });
    }
    /*
     *  enter a short feedback with fbFor, employee Name, create date, content and attachment
     */
    enterShortFB(fbFor, employee, createDate, content, attach) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ckbFullFB.click();
            this.ckbShortFB.click();
            yield this.selectFBFor(fbFor);
            if (fbFor == provideFeedbackPage.FOR_OTHER) {
                yield this.txbEmployee.clear();
                this.txbEmployee.sendKeys(employee);
            }
            yield this.dpkCreateDate.click();
            yield this.dpk.selectDate(createDate);
            yield this.setContent(content);
        });
    }
    enterFullFB(fbFor, employee, createDate, content, attach) {
    }
    saveFB() {
        this.btnSave.click();
    }
}
provideFeedbackPage.FOR_MYSELF = 0;
provideFeedbackPage.FOR_OTHER = 1;
exports.provideFeedbackPage = provideFeedbackPage;

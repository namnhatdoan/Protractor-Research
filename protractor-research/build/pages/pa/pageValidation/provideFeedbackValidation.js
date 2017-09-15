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
const provideFeedbackPage = require('../pageObject/provideFeedbackPage').provideFeedbackPage;
class provideFeedbackValidation {
    constructor() {
        this.pageObj = new provideFeedbackPage();
        // Element
        this.divCalendar = protractor_1.element(protractor_1.by.id("ui-datepicker-div"));
        this.txbCreateDate = protractor_1.element(protractor_1.by.id("Feedback_CreatedDate"));
        this.txbEmployee = this.pageObj.getEmployeeTextbox();
        this.ckbShortFB = this.pageObj.getShortFeedbackCheckbox();
        this.ckbFullFB = this.pageObj.getFullFeedbackCheckbox();
        this.selProvideFBFor = this.pageObj.getProvideFBForSelect();
    }
    verifyCalendarIsDisplayed() {
        this.divCalendar.isDisplayed().then(result => {
            expect(result).toBe(true);
        });
    }
    verifyDateIsSelected(date) {
        return __awaiter(this, void 0, void 0, function* () {
            this.txbCreateDate.getAttribute("value").then(actualDate => {
                let expectDate = (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());
                expect(actualDate).toMatch(expectDate);
            });
        });
    }
    verifyEmployeeFieldIsBlank() {
        this.pageObj.txbEmployee.getText().then(function (employeeName) {
            expect(employeeName).toBe("");
        }, function (err) {
            //console.log(err);
        });
    }
    verifyAllFieldAreBlank() {
        return __awaiter(this, void 0, void 0, function* () {
            this.verifyEmployeeFieldIsBlank();
            expect(this.pageObj.getContent()).toBe("");
        });
    }
    verifyShortFeedbackIsSelected() {
        this.ckbShortFB.isSelected().then(value => {
            expect(value).toBe(true);
        });
    }
    verifyFullFeedbackIsSelected() {
        this.ckbShortFB.isSelected().then(value => {
            expect(value).toBe(true);
        });
    }
    verifyMySelfIsSelected() {
        this.selProvideFBFor.element(protractor_1.by.xpath("./option[@value=0]")).isSelected().then(value => {
            expect(value).toBe(true);
        });
    }
    verifyOtherColleagueIsSelected() {
        this.selProvideFBFor.element(protractor_1.by.xpath("./option[@value=1]")).isSelected().then(value => {
            expect(value).toBe(true);
        });
    }
}
provideFeedbackValidation.FOR_MYSELF = "MySelf";
provideFeedbackValidation.FOR_OTHER = "Other";
exports.provideFeedbackValidation = provideFeedbackValidation;

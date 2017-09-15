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
class dpkHelper {
    constructor(dpkElement, lnkOpen) {
        this.dpkElement = dpkElement;
        this.lnkOpen = lnkOpen;
        this.init();
    }
    init() {
        this.selMonth = this.dpkElement.element(protractor_1.by.className('ui-datepicker-month'));
        this.selYear = this.dpkElement.element(protractor_1.by.className('ui-datepicker-year'));
    }
    /*
     *  Open datepicker if it isn't displayed
     */
    openDpk() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dpkElement.isDisplayed().then((isDispl) => {
                if (!isDispl) {
                    this.lnkOpen.click();
                }
            });
        });
    }
    selectDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            if (date && date != null) {
                //await this.openDpk();
                yield this.selYear.click();
                yield this.selYear.element(protractor_1.by.xpath('./option[@value=' + date.getFullYear() + ']')).click();
                yield this.selMonth.click();
                yield this.selMonth.element(protractor_1.by.xpath('./option[@value=' + date.getMonth() + ']')).click();
                yield this.dpkElement.element(protractor_1.by.xpath('//*[@id="ui-datepicker-div"]//td[.=' + date.getDate() + ']')).click();
            }
        });
    }
}
exports.dpkHelper = dpkHelper;

import { browser, element, by, ElementFinder } from 'protractor'
const provideFeedbackPage = require('../pageObject/provideFeedbackPage').provideFeedbackPage;

export class provideFeedbackValidation {
    private pageObj = new provideFeedbackPage();
    private static FOR_MYSELF: string = "MySelf";
    private static FOR_OTHER: string = "Other";
    // Element
    private divCalendar = element(by.id("ui-datepicker-div"));
    private txbCreateDate = element(by.id("Feedback_CreatedDate"));
    private txbEmployee: ElementFinder;
    private ckbShortFB: ElementFinder;
    private ckbFullFB: ElementFinder;
    private selProvideFBFor: ElementFinder;

    constructor() {
        this.txbEmployee = this.pageObj.getEmployeeTextbox();
        this.ckbShortFB = this.pageObj.getShortFeedbackCheckbox();
        this.ckbFullFB = this.pageObj.getFullFeedbackCheckbox();
        this.selProvideFBFor = this.pageObj.getProvideFBForSelect();
    }

    public verifyCalendarIsDisplayed() {
        this.divCalendar.isDisplayed().then(result => {
            expect(result).toBe(true);
        });
    }

    public async verifyDateIsSelected(date: Date) {
        this.txbCreateDate.getAttribute("value").then(actualDate => {
            let expectDate = (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());
            expect(actualDate).toMatch(expectDate);
        });
    }

    public verifyEmployeeFieldIsBlank() {
        this.pageObj.txbEmployee.getText().then(employeeName => {
            expect(employeeName).toBe("");
        }, function (err) {
            //console.log(err);
        });
    }

    public async verifyAllFieldAreBlank() {
        this.verifyEmployeeFieldIsBlank();
        expect(this.pageObj.getContent()).toBe("");
    }

    public verifyShortFeedbackIsSelected() {
        this.ckbShortFB.isSelected().then(value => {
            expect(value).toBe(true);
        });
    }

    public verifyFullFeedbackIsSelected() {
        this.ckbShortFB.isSelected().then(value => {
            expect(value).toBe(true);
        });
    }

    public verifyMySelfIsSelected() {
        this.selProvideFBFor.element(by.xpath("./option[@value=0]")).isSelected().then(value => {
            expect(value).toBe(true)
        })
    }

    public verifyOtherColleagueIsSelected() {
        this.selProvideFBFor.element(by.xpath("./option[@value=1]")).isSelected().then(value => {
            expect(value).toBe(true)
        })
    }
}
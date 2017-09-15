import {browser, element, by} from 'protractor'
// spec.js
const dpkHelper = require('../utils/dpkHelper.js').dpkHelper;
const signInPage = require('../pages/pa/signInPage').signInPage;


describe('Protractor Demo App', function() {
  // var firstNumber = element(by.model('first'));
  // var secondNumber = element(by.model('second'));
  // var goButton = element(by.id('gobutton'));
  // var latestResult = element(by.binding('latest'));
  // var history = element.all(by.repeater('result in memory'));
  // var abc = element(by.xpath("//*"));
  

  // function add(a, b) {
  //   firstNumber.sendKeys(a);
  //   secondNumber.sendKeys(b);
  //   goButton.click();
  // }

  // beforeEach(function() {
  //   browser.get('http://juliemr.github.io/protractor-demo/');
  // });

  // it('should have a history', function() {
  //   add(1, 2);
  //   add(3, 4);

  //   expect(history.count()).toEqual(2);

  //   add(5, 6);

  //   expect(history.count()).toEqual(3); 
  // });

  // it('should have a correct history', function() {
  //   add(7, 8);
  //   add(9, 10);

  //   expect(history.last().getText()).toContain('7 + 8');
  //   //expect(history.first().getText()).toContain('foo'); // This is wrong!
  // });
    beforeEach(()=>{
      browser.waitForAngularEnabled(false)
      browser.get('http://192.168.74.25/patest');
      let signInPageObj = new signInPage();
      signInPageObj.signIn('toanle','kms');
      browser.get('http://192.168.74.25/patest/Feedbacks/Create/');
      element(by.xpath('//*[@id="Feedback_CreatedDate"]/following-sibling::img')).click();
    })

    it('check', function(){
      let dpk = new dpkHelper(element(by.id('ui-datepicker-div')), null)
      dpk.selectDate(new Date())

    });
});
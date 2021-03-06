import {browser, protractor, ElementArrayFinder, ElementFinder} from 'protractor';
import {Constant} from "../../utils/Const";
const signInPage = require('../../pages/pa/pageObject/signInPage').signInPage;
const topPanel = require('../../pages/pa/pageObject/topPanel').topPanel;
const provideFeedbackPage = require('../../pages/pa/pageObject/provideFeedbackPage').provideFeedbackPage;
const searchFeedbackPage = require('../../pages/pa/pageObject/searchFeedbackPage').searchFeedbackPage;
const provideFeedbackValidation = require('../../pages/pa/pageValidation/provideFeedbackValidation').provideFeedbackValidation;
const topPanelValidation = require('../../pages/pa/pageValidation/provideFeedbackValidation').topPanelValidation;
const searchFeedbackValidation = require('../../pages/pa/pageValidation/searchFeedbackValidation').searchFeedbackValidation;

let urlChanged = require('../../utils/browserHelper').urlChanged;
let signInPageObj = new signInPage();
let topPanelObj = new topPanel();
let provideFBPageObj = new provideFeedbackPage();
let searchFBPageObj = new searchFeedbackPage();

let provideFBValidation = new provideFeedbackValidation();
//let topPValidation = new topPanelValidation();
let searchFBValidation = new searchFeedbackValidation();


describe('PA system -', function(){
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    })
    
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://192.168.74.25/patest/');
    });

    // describe('Sign In ', function(){
    //     describe('unsuccessfully', function(){
    //         it('with empty username.', function(){
    //             signInPageObj.signIn('','');
    //             // Verify error msg
    //             signInPageObj.isLastMsg('Username may not be empty.');
    //         });
            
    //         it('with empty password.', function(){
    //             signInPageObj.signIn('toanle','');
    //             // Verify error msg
    //             signInPageObj.isLastMsg('Password may not be empty.');
    //         });

    //         it('with invalid password', function(){
    //             signInPageObj.signIn('toanle','abcde')
    //         });
    //     });

        // describe('successfully',function(){
        //     it('with valid account.', function(){
        //         signInPageObj.signIn('toanle', 'kms');
        //         // Wait for Page loading to Home page
        //         browser.wait(urlChanged('http://192.168.74.25/patest/'), 3000);
        //         // Verify browser title is changed to Home page
        //         expect(browser.getTitle()).toMatch('Home');
        //         //topPanelObj.verifyWelcomeMsg('toanle');
        //         //topPValidation.verifyWelcomeMsg('toanle');
        //     });

    //         afterEach(function(){
    //             topPanelObj.signOut();
    //         })
    //     });
    //  });

    // it('Can be Signed Out.', function(){
    //     signInPageObj.signIn('toanle','kms');
    //     topPanelObj.signOut();
    //     // Verify that Sign In page is displayed
    //     expect(browser.getTitle()).toMatch('Login');
        
    //     // Cannot navigate back directly with URL
    //     browser.get('http://192.168.74.25/patest/Feedbacks/Create/').then( (value) => {
    //         expect(browser.getTitle()).toMatch('Login');
    //     })
    //     //browser.wait(urlChanged('http://192.168.74.25/patest/Feedbacks/Create'), 3000);
    // });

    describe('Provide feedback: ', function(){
        it('provide short feedback for themselves.', async function(){
            signInPageObj.signIn('toanle','kms');
            browser.get('http://192.168.74.25/patest/Feedbacks/Create/')
            .then(async function(){
                // Verify default information
                provideFBValidation.verifyShortFeedbackIsSelected();
                provideFBValidation.verifyMySelfIsSelected();
                provideFBValidation.verifyDateIsSelected(new Date())    // Today is selected by default
                
                // Enter new feedback information
                let yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1); // Need a function to get yesterday

                await provideFBPageObj.enterShortFB(provideFeedbackPage.MYSELF, '', yesterday, 'abcd', '');
                
                // Verify yesterday is selected
                await provideFBValidation.verifyDateIsSelected(yesterday);
                
                // Save FB
                provideFBPageObj.saveFB();
                // Verify all field are reset to blank
                await provideFBValidation.verifyAllFieldAreBlank();
            }, function(err){
                console.log('ERROR IN BROWSER.GET')   
            })
            
            // Expectation: All fields are reset to blank
        });

        afterEach(function(){
            topPanelObj.signOut();
        });
    });
    
    describe('Search Feedback -', function(){
        beforeEach(function(){
            signInPageObj.signIn('toanle','kms');
            browser.get('http://192.168.74.25/patest/Feedbacks/SearchFull?pendingOnly=False')
        })
        it('User can View feedback.',async function(){
            await searchFBPageObj.searchFeedback(searchFeedbackPage.FEEDBACK_FOR_ME, '', new Date(),new Date(),[searchFeedbackPage.DRAFT, searchFeedbackPage.PENDING]);
            searchFBValidation.verifySuccessMessageDisplay();
            await searchFBValidation.verifyButtonIsDisabled(searchFBPageObj.getOpenButton());
            let listFB:ElementFinder[] = await searchFBPageObj.getFeedbacks('Toan Ba Le', new Date(), 'Draft', 'Toan Ba Le');
            
            // Verify row is existed
            expect(listFB.length).toBeGreaterThan(0);
            const fbElement = listFB[0];
            listFB[0].click();
            // Verify button Open is enabled
            searchFBValidation.verifyButtonIsEnabled(searchFBPageObj.getOpenButton());

            searchFBPageObj.getOpenButton().click();
            browser.getAllWindowHandles().then(function(value){
                value.forEach((wname)=>{
                    
                })
            })
        });
    });
});
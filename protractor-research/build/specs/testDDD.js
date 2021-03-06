"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const XLSX = require('xlsx');
const csv = require('csvtojson');
beforeAll(function () {
    protractor_1.browser.waitForAngularEnabled(false);
});
describe('Practice data driven -', function () {
    beforeEach(function () {
        //browser.waitForAngularEnabled(false)
        protractor_1.browser.get('http://www.google.com');
    });
    it('Read from CSV', function () {
        // Using csvtojson lib
        console.log('====== Read from csv ======');
        console.log(protractor_1.browser.params.fileaddr);
        csv()
            .fromFile('..\\..\\data\test.csv')
            .on('json', (jsonObj) => {
            console.log(jsonObj.username);
        })
            .on('done', (error) => {
        });
    });
    /*
    it('Read from JSON file', function(){
        
        let JSonObj = require('..\\..\\data\\test.json')
        console.log('====== Read directly from JSON file ======')
        console.log(JSonObj)
    });

    it('Read from excel file', function(){
        // Using xlsx lib
        
        // Read a work book
        let workbook = XLSX.readFile('E:\\Workspace\\Nodejs\\protractor-research\\data\\Book1.xlsx')
        // Get first work sheet
        let firstWorkSheet = workbook.Sheets[workbook.SheetNames[0]]
        // Convert to json obj
        let JsonObj = XLSX.utils.sheet_to_json(firstWorkSheet)
        // Convert to csv
        let csvObj = XLSX.utils.sheet_to_csv(firstWorkSheet)

        console.log('====== Read from excel file ======')
        console.log(JsonObj)
        console.log(csvObj)
    });*/
});

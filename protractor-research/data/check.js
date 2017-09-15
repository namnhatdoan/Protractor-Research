const csv = require('csvtojson')
const XLSX = require('xlsx')

let jsonObj = require('E:\\Workspace\\Nodejs\\protractor-research\\data\\test.json')

var workbook = XLSX.readFile('./data/Book1.xlsx');
let a = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
let b = XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]])
console.log(a)
console.log(b)
//console.log(workbook.Sheets[workbook.SheetNames[0]])

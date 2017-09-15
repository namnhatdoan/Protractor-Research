"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SearchPageObject {
    constructor() {
        this.searchtxb = protractor_1.$("input[name='q']");
        this.searchbtn = protractor_1.$("input[name='btnK']");
    }
}
exports.SearchPageObject = SearchPageObject;

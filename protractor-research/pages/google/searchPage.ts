import { $ } from 'protractor';

export class SearchPageObject{
    public searchtxb: any;
    public searchbtn: any;
    constructor(){
        this.searchtxb =  $("input[name='q']");
        this.searchbtn =  $("input[name='btnK']");
    }
}
const {Key} = require('selenium-webdriver');
const BasePage = require ('./basepage');

const filterEvents = "//button[normalize-space()='Filter events']";
const applyFilters = "//button[@class='apply-button']";

class Events extends BasePage{
    constructor() {
        super();
        this.waitUntilInitialised();
    }

    openFilters(){
        this.clickElement(this.findByXpath(filterEvents));
    }

    addFilters(arrFilters) {
        arrFilters.forEach(function(item, index, array) {
            this.clickElement(this.findByXpath("//button[normalize-space()='" + item +"']"));
        })
    }

    applyFilters(){
        this.clickElement(this.findByXpath(applyFilters));
    }
}
module.exports = new Events();
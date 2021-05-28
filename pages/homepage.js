const {Key} = require('selenium-webdriver');
const BasePage = require ('./basepage');

const acceptCookies = "truste-consent-button";
const rejectCookies = "truste-consent-required";
const events = "a[href='/events']";
const hamburger = "//button[@aria-label='Open side navigation']";

class HomePage extends BasePage{
    constructor() {
        super();
        this.waitUntilInitialised();
    }
    acceptCookies(){
        this.clickElement(this.findById(acceptCookies));
    }

    rejectCookies(){
        this.clickElement(this.findById(rejectCookies));
    }

    openHamburger(){
        this.clickElement(this.findByXpath(hamburger));
    }

    clickEvents(){
        this.sleep(2);
        this.clickElement(this.findByCss(events));
    }
}
module.exports = new HomePage();
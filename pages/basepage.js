var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const { PageLoadStrategy } = require('selenium-webdriver/lib/capabilities');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (5000)});
const documentInitialised = () => driver.executeScript('return initialised');
const documentComplete = () => driver.executeScript('return document.readyState');

class BasePage{
    constructor(){
        global.driver = driver;
    }

    go_to_url(theURL){
        driver.get(theURL);
    }

    waitUntilInitialised() {
        driver.wait(documentInitialised(), 3000);
    }
    findByXpath(relXpathText) {
        return driver.findElement(By.xpath(relXpathText));      
    }

    findByCss(cssText) {
        return driver.findElement(By.css(cssText));
    }

    findById(idText) {
        return driver.findElement(By.id(idText));
    }

    clickElement(element) {
        driver.wait(webdriver.until.elementIsEnabled(element)).click();
    }
    
    sleep(seconds){
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }
}

module.exports = BasePage;
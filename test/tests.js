
const { Driver } = require('selenium-webdriver/chrome');
const { sleep } = require('../pages/events');
const events = require('../pages/events');
const homepage = require('../pages/homepage');

describe('This is the describe block', function(){
    this.timeout(50000);
    var baseurl = 'https://www.zwift.com/';
    beforeEach(function(){
        //Enter actions performed before test
    });

    afterEach(function(){
        
    });

    it('Zwift verify homepage loads', function(){
        homepage.go_to_url(baseurl);

    })
    it('Zwift events', function(){
        //Enter test steps
        homepage.go_to_url(baseurl);
        homepage.rejectCookies();
        homepage.openHamburger();
        homepage.clickEvents();
        sleep(3);
        var filters = new Array('Cycling','Race','Night');
        events.openFilters();
        events.addFilters(filters);
        events.applyFilters();
    })
})
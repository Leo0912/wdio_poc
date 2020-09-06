const MainPage = require('../pageobjects/angular/main.page');
const CustomerPage = require('../pageobjects/angular/customer.login.page');

describe('Test Angular flow', () => {
    it('login into customer ', () => {
        MainPage.open();
        MainPage.loginCustomer();
        CustomerPage.userSelect('Albus Dumbledore');
        CustomerPage.clickSubmit();
        expect(browser).toHaveUrl('http://www.way2automation.com/angularjs-protractor/banking/#/account') 
    })
})
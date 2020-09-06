const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CustomerLoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get userDropDown () { return $('#userSelect') }
    get btnLogin () { return $('button[type="submit"]') }

    userSelect(userName){
        this.userDropDown.selectByVisibleText(userName);
    }

    clickSubmit(){
        this.btnLogin.click();
    }

    validateURL(){
        return browser;
    }
}

module.exports = new CustomerLoginPage();

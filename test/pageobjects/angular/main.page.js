const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnCustomer () { return $('button=Customer Login') }
    get btnManager () { return $('button=Bank Manager Login') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    loginCustomer () {
        this.btnCustomer.click(); 
    }

    loginManager () {
        this.btnManager.click(); 
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new MainPage();

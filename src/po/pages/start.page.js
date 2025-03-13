
const LoginForm = require('./../components/loginForm.component')

class StartPage {

   constructor() {
    this.loginForm = new LoginForm();
   }



    async open() {
        await browser.url( 'https://www.saucedemo.com/');
    }
}

module.exports = StartPage;
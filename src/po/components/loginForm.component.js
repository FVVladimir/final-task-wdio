class LoginForm {
   
    get nameField() {
        return  $('//input[@id="user-name"]');
    }

    get passwordField() {
        return $('//*[@id="password"]');
    }

    get loginButton() {
        return $('//input[@id="login-button"]');
    }
}

module.exports = LoginForm;
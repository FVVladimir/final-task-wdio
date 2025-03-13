describe('tests login form', () => {
    beforeEach( async () => {
        await browser.url( 'https://www.saucedemo.com/')
    })
    
    it('Check the error messages: "Username is required"', async () => {
        
        await $('//input[@id="user-name"]').setValue('problem_user');
        await $('//*[@id="password"]').setValue('123456');        
        
        await browser.pause(2000);
        await $('//input[@id="user-name"]').clearValue();
        
        await browser.pause(2000);
        await $('//*[@id="password"]').clearValue();

        // await $('//input[@id="user-name"]').waitUntil(async () => (await $('//input[@id="user-name"]').getValue()) === '', {
        //     timeout: 5000,
        //     timeoutMsg: 'Username field is not cleared'
        // });
        
        // await $('//*[@id="password"]').waitUntil(async () => (await $('//*[@id="password"]').getValue()) === '', {
        //     timeout: 5000,
        //     timeoutMsg: 'Password field is not cleared'
        // });
        
        
        await browser.pause(2000);
        await $('//input[@id="login-button"]').click();
        
        await expect($('//h3[contains(text(),"Username is required")]'));
    })
    
    it('Check the error messages: "Password is required"', async () => {      
        
        await $('//input[@id="user-name"]').setValue('problem_user');
        await $('//input[@id="password"]').setValue('123456');        
        
        await $('//input[@id="password"]').setValue('');        
        
        await $('//input[@id="login-button"]').click();
        
        await expect($('//h3[contains(text(),"Password is required")]'));
    })
    
    it('Login and validate the title “Swag Labs” in the dashboard', async () => {    
        
        await $('//input[@id="user-name"]').setValue('standard_user');
        await $('//input[@id="password"]').setValue('secret_sauce'); 
        
        await $('//input[@id="login-button"]').click();
        await expect(browser).toHaveTitle('Swag Labs')
    })
})

// Task description

// Launch URL: https://www.saucedemo.com/

// UC-1 Test Login form with empty credentials:

// Type any credentials into "Username" and "Password" fields.
// Clear the inputs.
// Hit the "Login" button.
// Check the error messages: "Username is required".

// UC-2 Test Login form with credentials by passing Username:

// Type any credentials in username.
// Enter password.
// Clear the "Password" input.
// Hit the "Login" button.
// Check the error messages: "Password is required".

// UC-3 Test Login form with credentials by passing Username & Password:

// Type credentials in username which are under Accepted username are sections.
// Enter password as secret sauce.
// Click on Login and validate the title “Swag Labs” in the dashboard.

// Provide parallel execution, add logging for tests and use Data Provider to parametrize tests.
// Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.

// Please, add task description as README.md into your solution!

// To perform the task use the various of additional options:

// Test Automation tool: WebDriverIO;
// Browsers: 1) Firefox; 2) Chrome;
// Locators: XPath;
// Patterns: Page Object;
// Assertions: Use from the selected framework;
// [Optional] Loggers: Use from the selected framework.
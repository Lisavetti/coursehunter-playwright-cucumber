const { defineStep } = require("@cucumber/cucumber");

class LoginPage {
    async navigateToLoginScreen() {
        await page.goto("https://www.saucedemo.com/");
    };

    async submitLoginForm() {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
    };

    async assertUserIsLogIn() {
        await page.waitForSelector(".app_logo");
    }

    async pause() {
        await page.waitForTimeout(3000);
    }

    async submitLoginWithParametrs(username, password) {
        await page.fill('#user-name', username);
        await page.fill('#password', password);
        await page.click('#login-button');
    }
}
module.exports = { LoginPage }
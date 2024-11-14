const { Given, When, Then, defineStep } = require('@cucumber/cucumber');
const { LoginPage } = require('../page-objects/login-page');
// import { LoginPage } from '../page-objects/login-page';

const loginPage = new LoginPage();

Given("I visit a login page", async function () {
    await loginPage.navigateToLoginScreen();
});

defineStep("I fill login form with valid credentials", async function () {
    await loginPage.submitLoginForm();
});

Then('I should see the home page', async function () {
    await loginPage.assertUserIsLogIn();
});

defineStep('I wait for 3 seconds', async function () {
    await loginPage.pause();
});

defineStep(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function (username, password) {
    await loginPage.submitLoginWithParametrs(username, password);
})

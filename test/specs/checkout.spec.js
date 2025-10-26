import { allure } from '@wdio/allure-reporter';
import { expect } from 'expect';
import SaucePage from '../pageobjects/sauce.page.js';

describe('Checkout E2E (SauceDemo)', () => {
  it('compra un producto', async () => {
    allure.addFeature('E2E Flow');
    allure.addStory('Compra completa');
    allure.addSeverity('critical');
    allure.addEpic('Smoke Suite');
    allure.addTag('smoke', 'e2e', 'critical');

    await browser.url('https://www.saucedemo.com/');
    await SaucePage.login('standard_user', 'secret_sauce');
    await SaucePage.addToCart();
    await SaucePage.checkout();
    expect(await SaucePage.success.waitForDisplayed()).toBe(true);
  });
});

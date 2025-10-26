import Sauce from '../pageobjects/SaucePage.js';
import { expect } from 'expect';

describe('Checkout E2E (SauceDemo)', () => {
  it('compra un producto', async () => {
    await Sauce.open();
    await Sauce.doLogin('standard_user','secret_sauce');
    await Sauce.checkoutFlow();
    await Sauce.success.waitForDisplayed({ timeout: 10000 });
    expect(await Sauce.success.isDisplayed()).toBe(true);
  });
});

import LoginPage from '../pageobjects/login.page.js';
import cases from '../data/login-cases.json' assert { type: 'json' };
import { expect } from 'expect';

describe('Login DDT', () => {
  for (const c of cases) {
    it(`usuario=${c.user} ok=${c.ok}`, async () => {
      await LoginPage.open();
      await LoginPage.login(c.user, c.pass);
      const msg = (await LoginPage.flashText()).toLowerCase();
      expect(msg).toContain(c.expect.toLowerCase());
    });
  }
});

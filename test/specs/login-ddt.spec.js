import { allure } from '@wdio/allure-reporter';
import { expect } from 'expect';
import LoginPage from '../pageobjects/login.page.js';

describe('Login DDT', () => {
  allure.addFeature('Authentication');
  allure.addEpic('Data Driven Tests');

  const users = [
    { username: 'tomsmith', password: 'SuperSecretPassword!', ok: true },
    { username: 'tomsmith', password: 'wrong', ok: false },
    { username: 'bad', password: 'SuperSecretPassword!', ok: false },
  ];

  users.forEach(({ username, password, ok }) => {
    it(`usuario=${username} ok=${ok}`, async () => {
      allure.addStory(`Login con ${ok ? 'credenciales válidas' : 'credenciales inválidas'}`);
      allure.addSeverity(ok ? 'normal' : 'minor');
      allure.addTag('regression', 'auth', 'form');

      await LoginPage.open();
      await LoginPage.login(username, password);
      const message = await $('.flash').getText();
      expect(message.includes('You logged')).toBe(ok);
    });
  });
});

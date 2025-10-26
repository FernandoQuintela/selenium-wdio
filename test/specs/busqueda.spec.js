import { allure } from '@wdio/allure-reporter';
import { expect } from 'expect';

describe('DuckDuckGo', () => {
  it('busca "selenium webdriver" y valida título', async () => {
    allure.addFeature('Search Engine');
    allure.addStory('Validar búsqueda funcional');
    allure.addSeverity('minor');
    allure.addEpic('Regression Suite');
    allure.addTag('smoke', 'ui', 'regression');

    await browser.url('https://duckduckgo.com');
    await $('#searchbox_input').setValue('selenium webdriver');
    await $('#searchbox_homepage').keys('Enter');
    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain('selenium');
  });
});

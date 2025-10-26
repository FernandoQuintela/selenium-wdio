import allure from '@wdio/allure-reporter';
import { expect } from 'expect';

describe('DuckDuckGo', () => {
  it('busca "selenium webdriver" y valida título', async () => {
    allure.addFeature('Search Engine');
    allure.addStory('Validar búsqueda funcional');
    allure.addSeverity('minor');
    allure.addEpic('Regression Suite');
    allure.addTag('smoke', 'ui', 'regression');

    await browser.url('https://duckduckgo.com');

    // selector robusto para el input
    const q = await $('[name="q"], #searchbox_input');
    await q.waitForDisplayed({ timeout: 10000 });
    await q.setValue('selenium webdriver');

    // Enter se envía desde el browser, no desde el elemento
    await browser.keys('Enter');

    // espera un resultado visible (menos frágil que el título)
    const firstResult = await $('a[data-testid="result-title-a"], #links .result__title a');
    await firstResult.waitForDisplayed({ timeout: 10000 });

    // validación final
    const title = (await browser.getTitle()).toLowerCase();
    expect(title).toContain('selenium');
  });
});

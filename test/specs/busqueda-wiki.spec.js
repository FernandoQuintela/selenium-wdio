import { expect } from 'expect';

describe('Wikipedia search', () => {
  it('busca "selenium webdriver" y valida resultados', async () => {
    await browser.url('https://www.wikipedia.org/');
    await $('#searchInput').setValue('selenium webdriver');
    await $('button[type="submit"]').click();

    // Espera a que cargue lista de resultados o artículo
    const firstHeading = await $('#firstHeading');
    const searchResults = await $('#mw-content-text');

    await browser.waitUntil(async () =>
      (await firstHeading.isDisplayed()) || (await searchResults.isDisplayed()),
      { timeout: 10000, timeoutMsg: 'Wikipedia no mostró resultados a tiempo' }
    );

    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain('selenium');
  });
});

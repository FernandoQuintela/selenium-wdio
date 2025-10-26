import allure from '@wdio/allure-reporter';
import { expect } from 'expect';

const isCI = process.env.CI === 'true';

/**
 * Intenta cerrar banners de consentimiento si aparecen en algunas regiones.
 * No falla si no existe.
 */
async function dismissConsentIfAny() {
  const candidates = [
    'button*=Accept',         // inglés
    'button*=I agree',
    'button*=Got it',
    'button*=Aceptar',        // español
    'button*=Entiendo',
    '[aria-label*="consent"] button',
  ];
  for (const sel of candidates) {
    const el = await $(sel);
    if (await el.isExisting()) {
      try { await el.click(); } catch { /* ignore */ }
    }
  }
}

describe('DuckDuckGo', function () {
  // En CI le doy 1 reintento extra al spec completo
  this.retries(isCI ? 1 : 0);

  it('busca "selenium webdriver" y valida que hay resultados', async () => {
    allure.addFeature('Search Engine');
    allure.addStory('Validar búsqueda funcional');
    allure.addSeverity('minor');
    allure.addEpic('Regression Suite');
    allure.addTag('ui', 'regression');

    // Le fuerzo idioma/region para evitar layouts raros
    // q = query
    const url = 'https://duckduckgo.com/?q=selenium+webdriver&ia=web&kl=us-en';
    await browser.url(url);

    // Dismiss de consent/banners si aparecen
    await dismissConsentIfAny();

    // Espero a que el input esté visible y "estable"
    const input = await $('[name="q"], #searchbox_input');
    await input.waitForDisplayed({ timeout: 20000 });

    // A veces la URL con query tarda en hidratar resultados; esto asegura un Enter extra
    // pero desde browser, no desde el elemento
    await browser.keys('Enter');

    // Le doy una espera robusta, al menos 1 resultado en el DOM
    await browser.waitUntil(async () => {
      const results = await $$('a[data-testid="result-title-a"], #links .result__title a');
      return results.length > 0;
    }, { timeout: 20000, timeoutMsg: 'No aparecieron resultados en el tiempo esperado' });

    // Y además, que el primero esté visible
    const first = await $('a[data-testid="result-title-a"], #links .result__title a');
    await first.waitForDisplayed({ timeout: 10000 });

    // Validación más suave del título para no depender de copy exacto
    const title = (await browser.getTitle()).toLowerCase();
    expect(title).toContain('selenium');

    // Extra evidencia en Allure (útil cuando flakea en CI)
    allure.addAttachment('page url', await browser.getUrl(), 'text/plain');
    const png = await browser.takeScreenshot();
    allure.addAttachment('screenshot post-búsqueda', Buffer.from(png, 'base64'), 'image/png');
  });
});

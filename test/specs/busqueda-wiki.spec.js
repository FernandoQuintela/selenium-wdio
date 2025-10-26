import { expect } from 'expect';

async function closeDonationPopup() {
  const selectors = [
    '.frb-inline',                  // contenedor del banner
    '.frb-dismiss',                 // botón de cerrar (cuando existe)
    'button[title="Close"]',
    'button[aria-label*="close"]'
  ];

  for (const sel of selectors) {
    const el = await $(sel);
    if (await el.isExisting()) {
      try { await el.click(); return; } catch { /* meh */ }
    }
  }
}

describe('Wikipedia search', () => {
  it('busca "selenium webdriver" y valida resultados', async () => {
    await browser.url('https://www.wikipedia.org/');

    // cierra el banner si aparece
    await closeDonationPopup();

    const input = await $('#searchInput');
    await input.waitForDisplayed({ timeout: 10000 });
    await input.setValue('selenium webdriver');

    const submit = await $('button[type="submit"]');
    await browser.execute("arguments[0].scrollIntoView()", submit);
    await browser.pause(500); // pequeño delay por si el banner tapa

    try {
      await submit.click();
    } catch {
      await browser.execute(() => window.scrollBy(0, 400));
      await browser.pause(500);
      await browser.execute("arguments[0].scrollIntoView(true)", submit);
      await submit.click();
    }

    // Esperar a que cargue resultados o artículo
    const heading = await $('#firstHeading');
    const content = await $('#mw-content-text');

    await browser.waitUntil(async () =>
      (await heading.isDisplayed()) || (await content.isDisplayed()),
      { timeout: 10000, timeoutMsg: 'Wikipedia no mostró resultados a tiempo' }
    );

    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain('selenium');
  });
});

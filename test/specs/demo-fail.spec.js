import { expect } from 'expect';

describe('Demo de fallo con screenshot', () => {
  it('falla a propósito para generar evidencia', async () => {
    await browser.url('https://duckduckgo.com');
    const title = await browser.getTitle();
    // Esperamos cualquier cosa ridícula para forzar el fail
    expect(title.toLowerCase()).toContain('cucumber'); // va a fallar
  });
});

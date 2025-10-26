import path from 'node:path';
import { expect } from 'expect';

describe('File Upload', () => {
  it('sube un archivo y valida el nombre', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload');

    const local = path.join(process.cwd(), 'test', 'assets', 'ghost2.jpg');
    const remote = await browser.uploadFile(local); // mueve el archivo al runner
    await $('#file-upload').setValue(remote);
    await $('#file-submit').click();

    await $('h3=File Uploaded!').waitForDisplayed();
    const uploaded = await $('#uploaded-files').getText();
    expect(uploaded).toContain('ghost2.jpg');
  });
});

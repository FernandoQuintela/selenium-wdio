import allure from '@wdio/allure-reporter';
import path from 'node:path';
import { expect } from 'expect';

describe('File Upload', () => {
  it('sube un archivo y valida el nombre', async () => {
    allure.addFeature('Forms');
    allure.addStory('Carga de archivos');
    allure.addSeverity('normal');
    allure.addEpic('UI Functional Suite');
    allure.addTag('ui', 'smoke');

    await browser.url('https://the-internet.herokuapp.com/upload');
    const local = path.join(process.cwd(), 'test', 'assets', 'ghost2.jpg');
    const remote = await browser.uploadFile(local);
    await $('#file-upload').setValue(remote);
    await $('#file-submit').click();

    await $('h3=File Uploaded!').waitForDisplayed();
    const uploaded = await $('#uploaded-files').getText();
    expect(uploaded).toContain('ghost2.jpg');
  });
});

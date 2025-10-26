class LoginPage {
  get inputUser() { return $('#username'); }
  get inputPass() { return $('#password'); }
  get btnLogin()  { return $('button[type="submit"]'); }
  get flash()     { return $('#flash'); }

  async open() {
    await browser.url('https://the-internet.herokuapp.com/login');
  }

  async login(user, pass) {
    await this.inputUser.waitForDisplayed();
    await this.inputUser.setValue(user);
    await this.inputPass.setValue(pass);
    await this.btnLogin.click();
  }

  async flashText() {
    await this.flash.waitForDisplayed();
    return (await this.flash.getText()).trim();
  }
}

export default new LoginPage();

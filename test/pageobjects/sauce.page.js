class SaucePage {
  async open () { await browser.url('https://www.saucedemo.com/'); }

  get user () { return $('#user-name'); }
  get pass () { return $('#password'); }
  get btnLogin () { return $('#login-button'); }
  async login (u, p) {
    await this.user.waitForDisplayed();
    await this.user.setValue(u);
    await this.pass.setValue(p);
    await this.btnLogin.click();
  }

  get firstAddBtn () { return $('button.btn_inventory'); }
  get cart () { return $('.shopping_cart_link'); }
  get btnCheckout () { return $('#checkout'); }
  async addToCart () {
    await $('div.inventory_list').waitForDisplayed({ timeout: 10000 });
    await this.firstAddBtn.click();
  }
  async checkout () {
    await this.cart.click();
    await this.btnCheckout.click();
    await $('#first-name').setValue('Fer');
    await $('#last-name').setValue('QA');
    await $('#postal-code').setValue('1000');
    await $('#continue').click();
    await $('#finish').click();
  }

  get success () { return $('h2=Thank you for your order!'); }
}
export default new SaucePage();

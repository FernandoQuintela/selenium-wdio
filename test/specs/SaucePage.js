class SaucePage {
  async open() { await browser.url('https://www.saucedemo.com/'); }
  get user(){ return $('#user-name'); }
  get pass(){ return $('#password'); }
  get login(){ return $('#login-button'); }
  async doLogin(u,p){ await this.user.setValue(u); await this.pass.setValue(p); await this.login.click(); }

  get firstAddBtn(){ return $('button.btn_inventory'); }
  get cart(){ return $('.shopping_cart_link'); }
  get checkout(){ return $('#checkout'); }
  async checkoutFlow(){
    await this.firstAddBtn.waitForDisplayed();
    await this.firstAddBtn.click();
    await this.cart.click();
    await this.checkout.click();
    await $('#first-name').setValue('Fer');
    await $('#last-name').setValue('QA');
    await $('#postal-code').setValue('1000');
    await $('#continue').click();
    await $('#finish').click();
  }
  async success(){ return $('h2=Thank you for your order!'); }
}
export default new SaucePage();

import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private registerLink: Locator;
  private logoutLink: Locator;
  private myAccountLink: Locator;

  constructor(page: Page) {
    super(page);
    
    this.registerLink = page.locator("//a[normalize-space()='Register']");
    this.logoutLink = page.locator("//a[normalize-space()='Log out']");
    this.myAccountLink = page.locator("//a[@class='ico-account']");
  }

  async openHome() {
    await this.openURL("/");
  }

    async clickRegister() {
    await this.registerLink.click();
  }

   async clickLogout() {
    await this.logoutLink.click();
  }

   async clickMyAccount() {
    await this.myAccountLink.click();
  }

  getRegisterLink(): Locator {
    return this.registerLink;
  }

  getLogoutLink(): Locator {
  return this.logoutLink;
  }

  

}

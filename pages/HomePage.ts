import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private registerLink: Locator;

  constructor(page: Page) {
    super(page);
    
    this.registerLink = page.locator("//a[normalize-space()='Register']");
  }

  async openHome() {
    await this.openURL("/");
  }


  getRegisterLink(): Locator {
    return this.registerLink;
  }
}

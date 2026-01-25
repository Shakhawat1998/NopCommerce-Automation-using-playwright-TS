import { Page, Locator } from "@playwright/test";

export class RegisterPage {
  private page: Page;
  private registerHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerHeader = page.locator("//h1[normalize-space()='Register']");
  }

  getRegisterHeader(): Locator {
    return this.registerHeader;
  }
}

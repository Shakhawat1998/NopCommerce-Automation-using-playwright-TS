import { Page } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openURL(path: string = "/") {
    await this.page.goto(path); // baseURL is auto-used
  }
}

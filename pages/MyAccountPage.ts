import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MyAccountPage extends BasePage {

  
  private myAccountHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.myAccountHeading = page.locator(`//h1[normalize-space()='My account - Customer info']`);
  }

  getMyAccountHeading(): Locator {
    return this.myAccountHeading;
  }
}
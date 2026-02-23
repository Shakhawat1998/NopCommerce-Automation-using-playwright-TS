import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MyAccountPage extends BasePage {

  
  private myAccountHeading: Locator;
  private addressLink: Locator;
  private changePasswordLink: Locator;

  constructor(page: Page) {
    super(page);
    this.myAccountHeading = page.locator(`//h1[normalize-space()='My account - Customer info']`);
    this.addressLink = page.locator(`//a[normalize-space()='Addresses']`);
    this.changePasswordLink = page.locator("//a[normalize-space()='Change password']");
  }

  getMyAccountHeading(): Locator {
    return this.myAccountHeading;
  }

  async clickAddressLink() {
    await this.addressLink.nth(0).click();
  }

   async clickChangePasswordLink() {
    await this.changePasswordLink.click();
  }


}
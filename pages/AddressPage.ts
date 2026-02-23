import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AddressPage extends BasePage {

  private myAccountAddressHeading: Locator;

  constructor(page: Page) {
    super(page);

    this.myAccountAddressHeading = page.locator("//h1[normalize-space()='My account - Addresses']");
  }

  getMyAccountAddressHeading(): Locator {
    return this.myAccountAddressHeading;
  }
}
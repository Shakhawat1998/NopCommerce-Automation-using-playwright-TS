import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AddressPage extends BasePage {

  private myAccountAddressHeading: Locator;
  private addNewAddressButton: Locator;

  constructor(page: Page) {
    super(page);

    this.myAccountAddressHeading = page.locator("//h1[normalize-space()='My account - Addresses']");
    this.addNewAddressButton = page.locator("//button[normalize-space()='Add new']");
  }

  getMyAccountAddressHeading(): Locator {
    return this.myAccountAddressHeading;
  }

  async clickAddNewAddressButton() {  
    await this.addNewAddressButton.click();
  }

  

}
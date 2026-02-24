import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AddressPage extends BasePage {

  private myAccountAddressHeading: Locator;
  private addNewAddressButton: Locator;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private countryDropdown: Locator;
  private cityInput: Locator;
  private address1Input: Locator;
  private emailInput: Locator;
  private phoneNumberInput: Locator;
  private saveButton: Locator;

  constructor(page: Page) {
    super(page);

    this.myAccountAddressHeading = page.locator("//h1[normalize-space()='My account - Addresses']");
    this.addNewAddressButton = page.locator("//button[normalize-space()='Add new']");
    this.firstNameInput = page.locator("#Address_FirstName");
    this.lastNameInput = page.locator("#Address_LastName");
    this.emailInput = page.locator("#Address_Email");
    this.countryDropdown = page.locator("#Address_CountryId");
    this.cityInput = page.locator("#Address_City");
    this.address1Input = page.locator("#Address_Address1");
    this.phoneNumberInput = page.locator("#Address_PhoneNumber");
    this.saveButton = page.locator("//button[normalize-space()='Save']");
  }

  getMyAccountAddressHeading(): Locator {
    return this.myAccountAddressHeading;
  }

  async clickAddNewAddressButton() {  
    await this.addNewAddressButton.click();
  }

  async fillAddressForm(firstName: string, lastName: string, email: string, countryOption: string, city: string, address1: string, phoneNumber: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.countryDropdown.selectOption({value: countryOption});
    await this.cityInput.fill(city);
    await this.address1Input.fill(address1);
    await this.phoneNumberInput.fill(phoneNumber);
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }

  
}
import { Page, Locator } from "@playwright/test";

export class RegisterPage {
  private page: Page;
  private registerHeader: Locator;

  private maleGender: Locator;
  private firstName: Locator;
  private lastName: Locator;
  private email: Locator;
  private password: Locator;
  private confirmPassword: Locator;
  private privacyPolicy: Locator;
  private registerButton: Locator;
  private resultText: Locator;

  
  private dobDay: Locator;
  private dobMonth: Locator;
  private dobYear: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerHeader = page.locator("//h1[normalize-space()='Register']");

    this.maleGender = page.locator("//input[@id='gender-male']");
    this.firstName = page.locator("//input[@id='FirstName']");
    this.lastName = page.locator("//input[@id='LastName']");
    this.email = page.locator("//input[@id='Email']");
    this.password = page.locator("//input[@id='Password']");
    this.confirmPassword = page.locator("//input[@id='ConfirmPassword']");
    this.privacyPolicy = page.locator("//input[@id='accept-consent']");
    this.registerButton = page.locator("//button[@id='register-button']");
    this.resultText = page.locator("//div[@class='result']");

    this.dobDay = page.locator("//select[@name='DateOfBirthDay']");
    this.dobMonth = page.locator("//select[@name='DateOfBirthMonth']");
    this.dobYear = page.locator("//select[@name='DateOfBirthYear']");
  }

  getRegisterHeader(): Locator {
    return this.registerHeader;
  }


    async selectMaleGender() {
    await this.maleGender.check();
  }

  async fillFirstName(value: string) {
    await this.firstName.fill(value);
  }

  async fillLastName(value: string) {
    await this.lastName.fill(value);
  }

  async fillEmail(value: string) {
    await this.email.fill(value);
  }

  async fillPassword(value: string) {
    await this.password.fill(value);
  }

  async fillConfirmPassword(value: string) {
    await this.confirmPassword.fill(value);
  }

  async selectDateOfBirthDay(day: string) {
    await this.dobDay.selectOption(day);
  }

  async selectDateOfBirthMonth(month: string) {
    await this.dobMonth.selectOption(month);
  }

  async selectDateOfBirthYear(year: string) {
    await this.dobYear.selectOption({ value: year });
  }

  async acceptPrivacyPolicy() {
    await this.privacyPolicy.check();
  }

  async submitRegistration() {
    await this.registerButton.click();
  }

  getResultText(): Locator {
    return this.resultText;
  }
}

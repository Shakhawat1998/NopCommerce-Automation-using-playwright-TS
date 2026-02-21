import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private loginLink: Locator;
  private emailField: Locator;
  private passwordField: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);

    // as provided
    this.loginLink = page.locator("//a[normalize-space()='Log in']");
    this.emailField = page.locator("#Email");
    this.passwordField = page.locator("#Password");
    this.loginButton = page.locator("//button[normalize-space()='Log in']");
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

  async typeEmail(email: string) {
    await this.emailField.fill(email);
  }

  async typePassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  
}
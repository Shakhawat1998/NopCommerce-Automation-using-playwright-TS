import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ChangePasswordPage extends BasePage {

  

  private oldPasswordInputField: Locator;
  private newPasswordInputField: Locator;
  private confirmPasswordInputField: Locator;
  private changePasswordButton: Locator;
  private passwordChangedText: Locator;

  constructor(page: Page) {
    super(page);

    this.oldPasswordInputField = page.locator("#OldPassword");
    this.newPasswordInputField = page.locator("#NewPassword");
    this.confirmPasswordInputField = page.locator("#ConfirmNewPassword");
    this.changePasswordButton = page.locator("//button[normalize-space()='Change password']" );
    this.passwordChangedText = page.locator(`//p[normalize-space()='Password was changed']`);
  }

  async fillOldPassword(password: string) {
    await this.oldPasswordInputField.fill(password);
  }

  async fillNewPassword(password: string) {
    await this.newPasswordInputField.fill(password);
  }

  async fillConfirmPassword(password: string) {
    await this.confirmPasswordInputField.fill(password);
  }

  async clickChangePasswordButton() {
    await this.changePasswordButton.click();
  }

  getPasswordChangedText(): Locator {       
    return this.passwordChangedText;
  }


}
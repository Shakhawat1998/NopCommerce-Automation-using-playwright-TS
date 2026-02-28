import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ComparePage extends BasePage{

  private jewelryCategoryLink: Locator;
  private product1AddToCompareListButton: Locator;
  private product2AddToCompareListButton: Locator;
  private compareProductsListLink: Locator;
  private productNames: Locator;

  constructor(page: Page) {
    super(page);

    this.jewelryCategoryLink = page.locator("(//a[normalize-space()='Jewelry'])[1]");

    this.product1AddToCompareListButton =
      page.locator("(//button[normalize-space()='Add to compare list'])[2]");

    this.product2AddToCompareListButton =
      page.locator("(//button[normalize-space()='Add to compare list'])[3]");

    this.compareProductsListLink = page.locator(`//a[normalize-space()='Compare products list']`);

    this.productNames = this.page.locator("//tr[@class='product-name']/td[position()>1]/a");


    
  }

  async goToJewelryCategory() {
    await this.jewelryCategoryLink.click();
  }

  async addFirstProductToCompare() {
    await this.product1AddToCompareListButton.click();
  }

  async addSecondProductToCompare() {
    await this.product2AddToCompareListButton.click();
  }

  

  async navigateToCompareProductsList() {
    await this.compareProductsListLink.click();
  }

  async getComparedProductNames(): Promise<string[]> {
    return await this.productNames.allTextContents();
 }
}

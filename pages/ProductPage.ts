import { Page, Locator } from "@playwright/test";

export class ProductPage {

  private page: Page;
  private productLink: Locator;
  private ramDropdown: Locator;
  private hddRadioButton: Locator;
  private osRadioButton: Locator;
  private addToWishlistButton: Locator;
  private productAddedToWishlistText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productLink = page.locator("//a[normalize-space()='Build your own computer']");
    this.ramDropdown = page.locator("#product_attribute_2");
    this.hddRadioButton = page.locator("#product_attribute_3_7");
    this.osRadioButton = page.locator(`//input[@id='product_attribute_4_8']`);
    this.addToWishlistButton = page.locator('#add-to-wishlist-button-1:visible')
    this.productAddedToWishlistText = page.locator(`//p[contains(normalize-space(), 'The product has been added to ')]`);

  }

  async clickProductLink() {
    await this.productLink.click();
  }

  async selectRAMOption(option: string) {       
    await this.ramDropdown.selectOption({ label: option });
  }

  async clickHDDRadioButton() {
    await this.hddRadioButton.click();
  }

  async clickOSRadioButton() {
    await this.osRadioButton.click();
  }

  async clickAddToWishlistButton() {
    await this.addToWishlistButton.click();
  }

  getProductAddedToWishlistText(): Locator {  
    return this.productAddedToWishlistText;
  }   

 
}
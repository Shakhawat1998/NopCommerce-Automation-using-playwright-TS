import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage{

  private electronicsCategoryLink: Locator;
  private apparelCategoryLink: Locator;
  private digitalDownloadsCategoryLink: Locator;
  private electronicsProductAddToCartButton: Locator;
  private apparelProductAddToCartButton: Locator;
  private digitalDownloadProductAddToCartButton: Locator;
  private productAddedToCartText: Locator;
  private closeTextButton: Locator;

  constructor(page: Page) {
    super(page);
    this.electronicsCategoryLink = page.locator("(//a[normalize-space()='Electronics'])[1]");
    this.apparelCategoryLink = page.locator("(//a[normalize-space()='Apparel'])[1]");
    this.digitalDownloadsCategoryLink = page.locator("(//a[normalize-space()='Digital downloads'])[1]");
    this.electronicsProductAddToCartButton = page.locator(`(//button[contains(normalize-space(),'Add to cart')])[1]`);
    this.apparelProductAddToCartButton = page.locator(`(//button[contains(normalize-space(),'Add to cart')])[3]`)
    this.digitalDownloadProductAddToCartButton = page.locator(`(//button[contains(normalize-space(),'Add to cart')])[2]`);
    this.productAddedToCartText =page.locator(`//p[contains(normalize-space(), 'The product has been added to ')]`);
    this.closeTextButton = page.locator("//span[@class='close']");
    

    }

  async goToElectronicsCategory() {
    await this.electronicsCategoryLink.click();
  }

  async goToApparelCategory() {
    await this.apparelCategoryLink.click();
  } 

  async goToDigitalDownloadsCategory() {
    await this.digitalDownloadsCategoryLink.click();
  }

  async addElectronicsProductToCart() {
    await this.electronicsProductAddToCartButton.click();
  }   

  async addApparelProductToCart() {
    await this.apparelProductAddToCartButton.click();
 }   

  async addDigitalDownloadProductToCart() {
    await this.digitalDownloadProductAddToCartButton.click();
  }

  async clickCloseTextButton() {
    await this.closeTextButton.click();
  }

  getProductAddedToCartText(): Locator {
    return this.productAddedToCartText;
}

}
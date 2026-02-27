import { Page, Locator, Download} from "@playwright/test";

export class WishlistPage {

  private page: Page;
  private wishlistLink: Locator;
  private updateWishlistButton: Locator;
  private digitalDownloadCategoryLink: Locator;
  private digitalProductLink: Locator;
  private downLoadSampleButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.wishlistLink = page.locator("//span[normalize-space()='Wishlist']");
    this.updateWishlistButton = page.locator("//button[normalize-space()='Update wishlist']");
    this.digitalDownloadCategoryLink =  page.locator("(//a[@href='/digital-downloads'])[1]");
    this.digitalProductLink = page.locator("(//a[@href='/night-visions'])[1]");
    this.downLoadSampleButton = page.locator("//a[normalize-space()='Download sample']");
  }

  async clickWishlistLink() {
    await this.wishlistLink.click();
  }

  getUpdateWishlistButton(): Locator {
    return this.updateWishlistButton;
  }

  async clickDigitalDownloadCategoryLink() {
    await this.digitalDownloadCategoryLink.click();
  }

  async clickDigitalProductLink() {
    await this.digitalProductLink.click();
  }

async downloadSampleFile(): Promise<Download> {
    const downloadPromise = this.page.waitForEvent('download');

    await this.downLoadSampleButton.click();

    return await downloadPromise;
  }
}
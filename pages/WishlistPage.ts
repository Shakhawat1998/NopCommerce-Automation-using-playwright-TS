import { Page, Locator } from "@playwright/test";

export class WishlistPage {

  private page: Page;
  private wishlistLink: Locator;
  private updateWishlistButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.wishlistLink = page.locator("//span[normalize-space()='Wishlist']");
    this.updateWishlistButton = page.locator("//button[normalize-space()='Update wishlist']");
  }

  async clickWishlistLink() {
    await this.wishlistLink.click();
  }

  getUpdateWishlistButton(): Locator {
    return this.updateWishlistButton;
  }

  
}
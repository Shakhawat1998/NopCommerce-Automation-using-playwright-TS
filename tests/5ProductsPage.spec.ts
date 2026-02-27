import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { WishlistPage } from "../pages/WishlistPage";
import { expect, test } from "./fixtures/baseTest";


test("Verify product is added to wishlist successfully", async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    await homePage.goBackToHomePage();  
    await productPage.clickProductLink();
    await productPage.selectRAMOption("8GB [+$60.00]");
    await productPage.clickHDDRadioButton();
    await productPage.clickOSRadioButton();
    await productPage.clickAddToWishlistButton();
    await expect.soft(productPage.getProductAddedToWishlistText()).toContainText("The product has been added to your wishlist");   
});

test("Verify wishlist page is not empty after adding product to wishlist", async ({ page }) => {
    
    const wishlistPage = new WishlistPage(page);
    await wishlistPage.clickWishlistLink();
    await expect(wishlistPage.getUpdateWishlistButton()).toBeVisible();
});
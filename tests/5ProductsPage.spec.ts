import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
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
    await expect(productPage.getProductAddedToWishlistText()).toContainText("The product has been added to your wishlist");   
});
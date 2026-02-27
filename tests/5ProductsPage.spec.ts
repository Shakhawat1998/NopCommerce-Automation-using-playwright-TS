import fs from 'fs';
import path from 'path';
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
    await productPage.clickWishlistTextCloseButton();

});

test("Verify wishlist page is not empty after adding product to wishlist", async ({ page }) => {
    
    const wishlistPage = new WishlistPage(page);
    await wishlistPage.clickWishlistLink();
    await expect(wishlistPage.getUpdateWishlistButton()).toBeVisible();
});


test("Verify digital product is downloaded successfully", async ({ page }) => {
    const wishlistPage = new WishlistPage(page); 
    await wishlistPage.clickDigitalDownloadCategoryLink();
    await wishlistPage.clickDigitalProductLink();
    const download = await wishlistPage.downloadSampleFile();
    const fileName = download.suggestedFilename();
    const filePath = path.join('downloads', fileName);
    await download.saveAs(filePath);
    expect(fileName).toBeTruthy();
    expect(fs.existsSync(filePath)).toBeTruthy();

});
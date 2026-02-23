import { test, expect } from "./fixtures/baseTest";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { AddressPage } from "../pages/AddressPage";


test("Verify user is redirected to My Account page", async ({ page }) => {

  const homePage = new HomePage(page);
  const myAccountPage = new MyAccountPage(page);

  await homePage.clickMyAccount();
  await expect(myAccountPage.getMyAccountHeading()).toBeVisible();
  
});

test("Verify user is redirected to address page", async ({ page }) => {

  const myAccountPage = new MyAccountPage(page);
  const addressPage = new AddressPage(page);
    
  await myAccountPage.clickAddressLink();
  await expect(addressPage.getMyAccountAddressHeading()).toBeVisible();

});
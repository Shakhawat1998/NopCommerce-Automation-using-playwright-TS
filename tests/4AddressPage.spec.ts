import { test, expect } from "./fixtures/baseTest";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/MyAccountPage";


test("Verify user is redirected to My Account page", async ({ page }) => {

  const homePage = new HomePage(page);
  const myAccountPage = new MyAccountPage(page);

  await homePage.clickMyAccount();
  await expect(myAccountPage.getMyAccountHeading()).toBeVisible();
  
});

test("Verify user is redirected to address page", async ({ page }) => {

  const myAccountPage = new MyAccountPage(page);
    
  await myAccountPage.clickAddressLink();

});
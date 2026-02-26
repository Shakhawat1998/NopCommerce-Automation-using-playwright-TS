import { test, expect } from "./fixtures/baseTest";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { AddressPage } from "../pages/AddressPage";
import { RandomUtils } from "../utils/randomUtils";
import { ChangePasswordPage } from "../pages/ChangePasswordPage";


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


test("Verify that new address is added by completing address form", async ({ page }) => {
  const addressPage = new AddressPage(page);
  const email = RandomUtils.getRandomEmail("user", "gmail.com");

  await addressPage.clickAddNewAddressButton();
  await addressPage.fillAddressForm("Shakhawat", "Hossain", email, "236", "New York", "123 Main Street", "1234567890");
  await addressPage.clickSaveButton();
  await expect(addressPage.getAddressAddedText()).toBeVisible();

});


test("Verify that new password is updated successfully", async ({ page }) => {
  const myAccountPage = new MyAccountPage(page);
  const changePasswordPage = new ChangePasswordPage(page);  
  const oldPassword = "Test@123";
  const newPassword = "NewTest@123";

  await myAccountPage.clickChangePasswordLink();  
  await changePasswordPage.fillOldPassword(oldPassword);
  await changePasswordPage.fillNewPassword(newPassword);
  await changePasswordPage.fillConfirmPassword(newPassword);
  await changePasswordPage.clickChangePasswordButton(); 
  await expect(changePasswordPage.getPasswordChangedText()).toBeVisible();
});




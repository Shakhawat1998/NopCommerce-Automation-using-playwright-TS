import { test, expect } from "./fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { userStore } from "../test-data/userStore";
import { HomePage } from "../pages/HomePage";

test("Login using user from mandatory registration test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  const user = userStore.registeredUser;
  if (!user) {
    throw new Error("registeredUser not found in userStore. Run mandatory registration test first (serial).");
  }


  await loginPage.clickLoginLink();

  
  await loginPage.typeEmail(user.email);
  await loginPage.typePassword(user.password);
  await loginPage.clickLoginButton();

  await expect(homePage.getLogoutLink()).toBeVisible();



});
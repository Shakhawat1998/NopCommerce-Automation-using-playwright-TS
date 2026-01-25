import { test } from "./fixtures/baseTest";
import { expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";

test("Click Register and verify Register page header", async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  await homePage.openHome();
  await homePage.clickRegister();

  await expect(registerPage.getRegisterHeader()).toBeVisible();
});
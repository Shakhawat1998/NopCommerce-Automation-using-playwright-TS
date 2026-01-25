import { test } from "./fixtures/baseTest";
import { expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { RandomUtils } from "../utils/randomUtils";

test("Click Register and verify Register page header", async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  await homePage.openHome();
  await homePage.clickRegister();

  await expect(registerPage.getRegisterHeader()).toBeVisible();
});


test("Register user with all fields including DOB", async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  const random = Math.floor(100 + Math.random() * 900);
  const email = RandomUtils.getRandomEmail("shakhawat", "gmail.com");
  const password = "Test@123";

  await homePage.openHome();
  await homePage.clickRegister();

  await registerPage.selectMaleGender();
  await registerPage.fillFirstName("Shakhawat");
  await registerPage.fillLastName("Hossain");
  await registerPage.fillEmail(email);

  
  await registerPage.selectDateOfBirthDay("19");
  await registerPage.selectDateOfBirthMonth("11");
  await registerPage.selectDateOfBirthYear("1998");

  await registerPage.fillPassword(password);
  await registerPage.fillConfirmPassword(password);
  await registerPage.acceptPrivacyPolicy();

  await registerPage.submitRegistration();

  await expect(registerPage.getResultText()).toBeVisible();
});
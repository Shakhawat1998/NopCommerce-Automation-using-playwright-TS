import { test } from "./fixtures/baseTest";
import { expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { RandomUtils } from "../utils/randomUtils";
import { userStore } from "../test-data/userStore";

test("Click Register and verify Register page header", async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  await homePage.openHome();
  await homePage.clickRegister();

  await expect(registerPage.getRegisterHeader()).toBeVisible();
});


test("Register user with all fields", async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

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

  await homePage.clickLogout();

  await expect(homePage.getRegisterLink()).toBeVisible();
});


test("Register user with only mandatory fields", async ({ page }) => {

    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);

    const email = RandomUtils.getRandomEmail("shakhawat", "gmail.com");
    const password = "Test@123";

    userStore.registeredUser = {
    email,
    password
  };

    
    await homePage.openHome();
    await homePage.clickRegister();

    
    await registerPage.fillFirstName("Shakhawat");
    await registerPage.fillLastName("Hossain");
    await registerPage.fillEmail(email);
    await registerPage.fillPassword(password);
    await registerPage.fillConfirmPassword(password);
    await registerPage.acceptPrivacyPolicy();

    await registerPage.submitRegistration();

    await expect(registerPage.getResultText()).toBeVisible();

    await registerPage.clickContinue();

    await homePage.clickLogout();

  });
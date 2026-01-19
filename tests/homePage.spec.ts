import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Visit nop-station site and verify Register link", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.openHome();

  await expect(page).toHaveURL(process.env.BASE_URL!);
  await expect(homePage.getRegisterLink()).toBeVisible();
});

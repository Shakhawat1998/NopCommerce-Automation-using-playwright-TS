import { Page } from '@playwright/test';

export class PageUtils {
  static async waitForTimeout(page: Page, ms: number) {
    await page.waitForTimeout(ms);
  }

  static setDefaultTimeout(page: Page, ms: number) {
    page.setDefaultTimeout(ms);
  }
}

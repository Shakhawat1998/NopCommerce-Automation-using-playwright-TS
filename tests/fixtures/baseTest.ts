import { test as base, BrowserContext, Page } from "@playwright/test";

type Fixtures = {
  page: Page;
};

type WorkerFixtures = {
  sharedContext: BrowserContext;
};

export const test = base.extend<Fixtures, WorkerFixtures>({

  sharedContext: [
    async ({ browser }, use) => {
      const context = await browser.newContext();
      await use(context);
      await context.close();
    },
    { scope: "worker" },
  ],


  page: async ({ sharedContext }, use) => {
    const page = await sharedContext.newPage();
    await use(page);
    await page.close();
  },
});
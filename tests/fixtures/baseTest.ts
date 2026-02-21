import { test as base, BrowserContext, Page } from "@playwright/test";

type Fixtures = {
  page: Page;
};

type WorkerFixtures = {
  sharedContext: BrowserContext;
  sharedPage: Page;
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

  
  sharedPage: [
    async ({ sharedContext }, use) => {
      const page = await sharedContext.newPage();
      await use(page);
      await page.close();
    },
    { scope: "worker" },
  ],

 
  page: async ({ sharedPage }, use) => {
    await use(sharedPage);
  },

});

export { expect } from "@playwright/test";
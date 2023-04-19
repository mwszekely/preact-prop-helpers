import { test, expect } from '@playwright/test';
import handler from "serve-handler";
import http from "node:http";

const PORT = 3000;


test.beforeEach(async ({page}) => {
  await page.goto(`http://localhost:${PORT}`);
}) 

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Preact/);
});

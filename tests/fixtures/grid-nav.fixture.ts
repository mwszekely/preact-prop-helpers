
import { Locator, expect } from "@playwright/test";
import { test as base } from "./base.fixture.js"

/*
declare global {
    interface Window {
        increment(): Promise<void>;
    }
}*/

export const test = base.extend<{gridNav: GridNavFixtures}>({
    gridNav: async ({ page, shared: { focusableFirst, locator } }, use) => {
        await page.goto("/tests/stage/?test-base=grid-navigation");
        const grid = locator.locator("[role=grid]");
        await focusableFirst.focus();
        await expect(grid).toBeAttached();
        await use({ grid });
    },
});

export interface GridNavFixtures {
    grid: Locator;
}
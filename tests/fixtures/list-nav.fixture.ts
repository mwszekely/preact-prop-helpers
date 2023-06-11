
import { Locator, expect } from "@playwright/test";
import { test as base } from "./base.fixture.js"

/*
declare global {
    interface Window {
        increment(): Promise<void>;
    }
}*/

export const test = base.extend<{listNav: ListNavFixtures}>({
    listNav: async ({ page, shared: { focusableFirst, locator } }, use) => {
        await page.goto("/tests/stage/?test-base=list-navigation");
        const list = locator.locator("[role=toolbar]");
        await focusableFirst.focus();
        await expect(list).toBeAttached();
        await use({ list });
    },
});

export interface ListNavFixtures {
    list: Locator;
}
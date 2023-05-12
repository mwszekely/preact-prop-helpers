
import { Locator } from "@playwright/test";
import { test as base } from "./shared.js"


declare global {
    interface Window {
        increment(): Promise<void>;
    }
}

export const test = base.extend<{listNav: ListNavFixtures}>({
    listNav: async ({ page, shared: { focusableFirst, locator } }, use) => {
        const list = locator.locator("[role=toolbar]");
        await page.goto("/tests/stage/?test-base=list-navigation");
        await focusableFirst.focus();
        await use({ list });
    },
});

export interface ListNavFixtures {
    list: Locator;
}
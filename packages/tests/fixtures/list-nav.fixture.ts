
import { Locator, expect } from "@playwright/test";
import { test as base } from "./base.fixture.js";

/*
declare global {
    interface Window {
        increment(): Promise<void>;
    }
}*/

export const test = base.extend<{listNav: ListNavFixtures}>({
    listNav: async ({ page, shared: { focusableFirst, locator, goToTest } }, use) => {
        await goToTest("list-navigation");
        const list = locator.locator("[role=toolbar]");
        await focusableFirst.focus();
        await expect(list).toBeAttached();
        const resetChildrenButton = page.locator("#reduce-child-count");
        const reduceChildrenButton = page.locator("#reset-child-order");
        const shuffleChildrenButton = page.locator("#shuffle-child-order");
        await use({ 
            list, 
            items: list.locator("li") ,
            reduceChildren: async () => { await reduceChildrenButton.click(); await page.keyboard.press("Shift+Tab") },
            resetChildCount: async () => { await resetChildrenButton.click(); await page.keyboard.press("Shift+Tab") },
            shuffleChildren: async () => { await shuffleChildrenButton.click(); await page.keyboard.press("Shift+Tab") },
        });
    },
});

export interface ListNavFixtures {
    list: Locator;
    items: Locator;
    shuffleChildren(): Promise<void>;
    reduceChildren(): Promise<void>;
    resetChildCount(): Promise<void>;
}
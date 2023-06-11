
import { Locator } from "@playwright/test";
import { test as base } from "./base.fixture.js"

/*
declare global {
    interface Window {
        increment(): Promise<void>;
    }
}*/

export const test = base.extend<{ press: { div: Locator, button: Locator } }>({
    press: async ({ page, shared: { focusableFirst, locator } }, use) => {
        await page.goto("/tests/stage/?test-base=press");
        await focusableFirst.focus();
        await use({
            div: locator.locator("div[role=button]"),
            button: locator.locator("button")
        });
    },
});

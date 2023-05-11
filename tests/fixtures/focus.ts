
import { Locator } from "@playwright/test";
import { test as base } from "./shared.js"


declare global {
    interface Window {
        increment(): Promise<void>;
    }
}

export const test = base.extend<{ press: { div: Locator, button: Locator } }>({
    press: async ({ page, shared: { locator } }, use) => {
        await page.goto("/tests/stage/?test-base=focus");
        use({
            div: locator.locator("div[role=button]"),
            button: locator.locator("button")
        });
    },
});

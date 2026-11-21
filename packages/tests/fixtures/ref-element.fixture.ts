
import { Locator } from "@playwright/test";
import { test as base } from "./base.fixture.js";

export const test = base.extend<{ refElement: { changeA: Locator, changeB: Locator, mountA: Locator, mountB: Locator, unmountA: Locator, unmountB: Locator } }>({
    refElement: async ({ page, shared: { focusableFirst, locator, goToTest } }, use) => {
        await goToTest("ref-element");
        await focusableFirst.focus();
        await use({
            changeA: locator.locator("#change-count-a"),
            changeB: locator.locator("#change-count-b"),
            mountA: locator.locator("#mount-count-a"),
            mountB: locator.locator("#mount-count-b"),
            unmountA: locator.locator("#unmount-count-a"),
            unmountB: locator.locator("#unmount-count-b")
        });
    },
});

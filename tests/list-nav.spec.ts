import { Page, expect } from '@playwright/test';
import { test } from "./fixtures/list-nav.js"
import { LoremIpsum } from './lorem.js';




function capitalize(buttonType: string) {
    return buttonType.substring(0, 1).toUpperCase() + buttonType.substring(1);
}

// TODO: Need to copy these back and forth
const DisabledIndex = 4;
const MissingIndex = 6;
const HiddenIndex = 8;

test("List navigation functions as expected", async ({ page, listNav }) => {
    await page.keyboard.press("Tab");
    await expect(page.locator("li").nth(0), "The 0-th menu item should be focused by default").toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator("li").nth(1), "Pressing down should focus the 1-th element").toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator("li").nth(2), "Pressing down again should focus the 2-th element").toBeFocused();

    await page.locator("li").nth(DisabledIndex - 1).focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator("li").nth(DisabledIndex), `The ${DisabledIndex}-th element is disabled, but can still be focused`).toBeFocused();
    
    await page.locator("li").nth(HiddenIndex - 1).focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator("li").nth(HiddenIndex + 1), `The ${HiddenIndex}-th element is hidden, so it should not be focused when navigated to`).toBeFocused();
    await page.locator("li").nth(HiddenIndex).focus();
    await expect(page.locator("li").nth(HiddenIndex), `The ${HiddenIndex}-th element is hidden, so it should not be focused when clicked`).not.toBeFocused();
    
    await page.locator("li").nth(MissingIndex - 1).focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator("li").nth(MissingIndex + 1), `The ${MissingIndex}-th element is missing, so the item after it should be focused`).toBeFocused();
    await page.locator("li").nth(MissingIndex).focus();
    await expect(page.locator("li").nth(MissingIndex), `The ${MissingIndex}-th element is missing -- how is it focused (when clicked)?`).not.toBeFocused();

    await page.keyboard.press("Home");
    await expect(page.locator("li").first(), "Pressing home should focus the first element").toBeFocused();
    await page.keyboard.press("End");
    await expect(page.locator("li").last(), "Pressing End should focus the final element").toBeFocused();

    await page.keyboard.type(LoremIpsum[HiddenIndex - 1]);
    await expect(page.locator("li").nth(HiddenIndex - 1), `Typeahead should work as expected`).toBeFocused();

});


import { Locator, expect } from "@playwright/test";
import { TestFunctionArgs_Base, test as base } from "./base.fixture.js";

export interface TestFunctionArgs_LinearNavigation extends TestFunctionArgs_Base {
    linearNavigation: LinearNavigationFixtures;
}


export const test = base.extend<{ linearNavigation: LinearNavigationFixtures }>({
    page: async ({ page }, use) => {
        await page.goto("?test-base=linear-navigation");
        await use(page);
    },
    linearNavigation: async ({ shared: { focusableFirst, locator } }: TestFunctionArgs_Base, use) => {
        const parent = locator.locator('ol');
        const children = parent.locator('li');
        await expect(locator).toBeAttached();
        await expect(parent).toBeAttached();
        await use({
            parent,
            children,
            tests: {
                arrowKeysAreConfigurable,
                arrowKeysDontMoveFocus,
                arrowKeysMoveFocus,
                homeEndMoveFocus
            }
        });

        return;


    }
});

export interface LinearNavigationFixtures {
    parent: Locator;
    children: Locator;
    tests: {
        arrowKeysMoveFocus: typeof arrowKeysMoveFocus;
        arrowKeysDontMoveFocus: typeof arrowKeysDontMoveFocus;
        arrowKeysAreConfigurable: typeof arrowKeysAreConfigurable;
        homeEndMoveFocus: typeof homeEndMoveFocus;
    }
}




// Test the basics -- you can tab into and out of the component in either direction with the Tab key.
async function arrowKeysMoveFocus({ linearNavigation, page, shared }: Pick<TestFunctionArgs_LinearNavigation, "linearNavigation" | "page" | "shared">) {

    await shared.focusableFirst.focus();
    await page.keyboard.press("Tab");
    await expect(linearNavigation.children.nth(0)).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(linearNavigation.children.nth(1)).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(linearNavigation.children.nth(2)).toBeFocused();

    await page.keyboard.press("ArrowUp");
    await expect(linearNavigation.children.nth(1)).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(linearNavigation.children.nth(0)).toBeFocused();
}

async function arrowKeysDontMoveFocus({ linearNavigation, page, shared }: Pick<TestFunctionArgs_LinearNavigation, "linearNavigation" | "shared" | "page">) {

    await shared.focusableFirst.focus();
    await page.keyboard.press("Tab");
    await expect(linearNavigation.children.nth(0)).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(linearNavigation.children.nth(1)).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(shared.focusableFirst).toBeFocused();

    await page.keyboard.press("ArrowDown");
    await expect(shared.focusableFirst).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(shared.focusableFirst).toBeFocused();
    await page.keyboard.press("ArrowLeft");
    await expect(shared.focusableFirst).toBeFocused();
    await page.keyboard.press("ArrowRight");
    await expect(shared.focusableFirst).toBeFocused();
}

async function arrowKeysAreConfigurable({ linearNavigation, page, shared }: Pick<TestFunctionArgs_LinearNavigation, "linearNavigation" | "shared" | "page">) {
    await shared.focusableFirst.focus();
    await page.keyboard.press("Tab");
    await expect(linearNavigation.children.nth(0)).toBeFocused();

    await shared.run("LinearNavigation", "setArrowKeyDirection", "none");
    await page.keyboard.press("ArrowDown");
    await expect(linearNavigation.children.nth(0)).toBeFocused();
    await page.keyboard.press("ArrowRight");
    await expect(linearNavigation.children.nth(0)).toBeFocused();

    await shared.run("LinearNavigation", "setArrowKeyDirection", "horizontal");
    await page.keyboard.press("ArrowDown");
    await expect(linearNavigation.children.nth(0)).toBeFocused();
    await page.keyboard.press("ArrowRight");
    await expect(linearNavigation.children.nth(1)).toBeFocused();
    await page.keyboard.press("ArrowLeft");
    await expect(linearNavigation.children.nth(0)).toBeFocused();

    await shared.run("LinearNavigation", "setArrowKeyDirection", "vertical");
    await page.keyboard.press("ArrowDown");
    await expect(linearNavigation.children.nth(1)).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(linearNavigation.children.nth(0)).toBeFocused();

    await shared.run("LinearNavigation", "setArrowKeyDirection", "either");
    await page.keyboard.press("ArrowDown");
    await expect(linearNavigation.children.nth(1)).toBeFocused();
    await page.keyboard.press("ArrowRight");
    await expect(linearNavigation.children.nth(2)).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(linearNavigation.children.nth(1)).toBeFocused();
    await page.keyboard.press("ArrowLeft");
    await expect(linearNavigation.children.nth(0)).toBeFocused();
}

async function homeEndMoveFocus({ linearNavigation, page, shared }: Pick<TestFunctionArgs_LinearNavigation, "linearNavigation" | "shared" | "page">) {
    await shared.focusableFirst.focus();
    await page.keyboard.press("Tab");
    await expect(linearNavigation.children.nth(0)).toBeFocused();

    // Move focus when the composite is focused
    await page.keyboard.press("End");
    await expect(linearNavigation.children.nth(-1)).toBeFocused();
    await page.keyboard.press("Home");
    await expect(linearNavigation.children.nth(0)).toBeFocused();

    // DON'T move focus when the composite isn't focused.
    await shared.focusableFirst.focus();
    await page.keyboard.press("End");
    await expect(shared.focusableFirst).toBeFocused();
    await page.keyboard.press("Home");
    await expect(shared.focusableFirst).toBeFocused();
}

import { Locator, expect } from "@playwright/test";
import { TestFunctionArgs_Base, test as base } from "./base.fixture.js";

export interface TestFunctionArgs_RovingTabIndex extends TestFunctionArgs_Base {
    rovingTabIndex: RovingTabIndexFixtures;
}

export const test = base.extend<{ rovingTabIndex: RovingTabIndexFixtures }>({
    page: async ({ page }, use) => {
        await page.goto("?test-base=roving-tab-index");
        await use(page);
    },
    rovingTabIndex: async ({ page, shared: { run, focusableFirst, focusableLast, locator } }, use) => {
        const parent = locator.locator('ol');
        const children = parent.locator('li');
        await expect(locator).toBeAttached();
        await expect(parent).toBeAttached();
        await use({
            parent,
            children,
            tests: {
                basics,
                untabbableChildrenAreSkipped,
                initiallyTabbableIndexWorks,
                lastTabbedIndexIsRemembered,
                focusMovesViaClick,
                unfocusableMovesToNearestNeighbor,
                dontFocusOnMount
            }
        });

        return;



    }
});

export interface RovingTabIndexFixtures {
    parent: Locator;
    children: Locator;
    tests: {
        basics: typeof basics;
        untabbableChildrenAreSkipped: typeof untabbableChildrenAreSkipped;
        initiallyTabbableIndexWorks: typeof initiallyTabbableIndexWorks;
        lastTabbedIndexIsRemembered: typeof lastTabbedIndexIsRemembered;
        focusMovesViaClick: typeof focusMovesViaClick;
        unfocusableMovesToNearestNeighbor: typeof unfocusableMovesToNearestNeighbor;
        dontFocusOnMount: typeof dontFocusOnMount;
    }
}
async function dontFocusOnMount({ shared, rovingTabIndex }: Pick<TestFunctionArgs_RovingTabIndex, "shared" | "rovingTabIndex">) {
    
    await expect(rovingTabIndex.parent).not.toBeFocused();
    await expect(rovingTabIndex.children.nth(0)).not.toBeFocused();
    await expect(shared.body).toBeFocused();
}
// Test the basics -- you can tab into and out of the component in either direction with the Tab key.
async function basics({ page, shared, rovingTabIndex }: Pick<TestFunctionArgs_RovingTabIndex, "rovingTabIndex" | "shared" | "page">) {

    await shared.focusableFirst.focus();
    
    await page.keyboard.press("Tab");
    await expect(rovingTabIndex.children.nth(0), "Pressing tab the first time must take focus into the composite's first child.").toBeFocused();

    await page.keyboard.press("Tab");
    await expect(shared.focusableLast, "Pressing tab the second time must take focus out of the composite").toBeFocused();

    await page.keyboard.press("Shift+Tab");
    await expect(rovingTabIndex.children.nth(0), "Tabbing backwards into the composite must return focus to the first child").toBeFocused();

    await page.keyboard.press("Shift+Tab");
    await expect(shared.focusableFirst, "Tabbing backwards out of the composite must take focus back to the start of the page").toBeFocused();
}

// Make sure that tabbing into a component doesn't allow it to focus a non-existent child.
async function untabbableChildrenAreSkipped({ page, shared, rovingTabIndex }: Pick<TestFunctionArgs_RovingTabIndex, "rovingTabIndex" | "shared" | "page">) {

    await shared.focusableFirst.focus();

    const target = 4;

    for (let i = 0; i < 10; ++i) {
        if (i != target)
            await shared.run("ListNavigationChildShared", `setUntabbable_${i}`, true);
    }

    await page.keyboard.press("Tab");
    for (let i = 0; i < 10; ++i) {
        if (i != target)
            await expect(rovingTabIndex.children.nth(i), `The ${i}-th child must not be focused because it is untabbable.`).not.toBeFocused();
    }

    await expect(rovingTabIndex.children.nth(target), `The ${target}-th child must be focused, because the first three children are untabbable`).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(shared.focusableFirst, "None of the first untabbable children must be focused when tabbing backwards out of the composite.").toBeFocused();
}

async function initiallyTabbableIndexWorks({ page, shared, rovingTabIndex }: Pick<TestFunctionArgs_RovingTabIndex, "rovingTabIndex" | "shared" | "page">) {

    await shared.focusableFirst.focus();

    const initiallyTabbableIndex = 5;

    // Set the initiallyTabbedIndex while the component is unmounted
    // (because it's set on mount, y'know, *initially*)
    await shared.run("Root", "setUnmounted", true);
    await shared.run("RovingTabIndex", "setInitiallyTabbedIndex", initiallyTabbableIndex);
    await shared.run("Root", "setUnmounted", false);

    await page.keyboard.press("Tab");
    await expect(rovingTabIndex.children.nth(initiallyTabbableIndex)).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(shared.focusableLast).toBeFocused();
}

async function lastTabbedIndexIsRemembered({ page, shared, rovingTabIndex }: Pick<TestFunctionArgs_RovingTabIndex, "rovingTabIndex" | "shared" | "page">) {

    await shared.focusableFirst.focus();

    // RTI doesn't (itself) listen for arrow key presses to change
    // the currently-focused child, so click it, focusing it and forcing
    // RTI too change what it considers the currently-focused child to be.
    //
    // Note: This relies on somewhat subtle behavior of RTI, as clicking on
    // an element with tabindex="-1" is allowed to focus even a plain <div>
    // in just plain HTML semantics.
    //
    // TODO: Separate out the clicking stuff into its own test
    // and provide an imperative handle for RTI, which *does* allow manually
    // setting the currently-focused child.
    const indexToFocus = 5;
    await rovingTabIndex.children.nth(indexToFocus).click();
    await expect(rovingTabIndex.children.nth(indexToFocus)).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(shared.focusableLast).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(rovingTabIndex.children.nth(indexToFocus)).toBeFocused();
}

async function focusMovesViaClick({ rovingTabIndex }: Pick<TestFunctionArgs_RovingTabIndex, "rovingTabIndex">) {
    
    // TODO(?)
    // This behavior isn't really..."invoked" from any of the code in this library.
    // In general, we try to listen for "presses" rather than "clicks"
    // but even without press handlers this is just kinda implied by standard HTML behavior.
    //
    // Test for it because if this behavior changes somehow, it probably has other implications.
    const indexToFocus = 5;
    await rovingTabIndex.children.nth(indexToFocus).click();
    await expect(rovingTabIndex.children.nth(indexToFocus)).toBeFocused();
}

async function unfocusableMovesToNearestNeighbor({ shared, rovingTabIndex }: Pick<TestFunctionArgs_RovingTabIndex, "rovingTabIndex" | "shared">) {

    const indexToFocus = 1;
    const indexToExpect = 7;

    // TODO: Parallelize, I guess...
    for (let i = 0; i < indexToExpect; ++i) {
        await shared.run("ListNavigationChildShared", `setUntabbable_${i}`, true);
    }

    await rovingTabIndex.children.nth(indexToFocus).click({ force: true });
    await expect(rovingTabIndex.children.nth(indexToExpect)).toBeFocused();
}

import { Locator, expect } from "@playwright/test";
import { TestFunctionArgs_Base, test as base } from "./base.fixture.js";
import { ariaStatesFollowSelection, multiSelectionFollowsActivation, multiSelectionFollowsFocus, noAriaStatesWhenDisabled } from "./multi-selection.tests.js";

export interface TestFunctionArgs_MultiSelection extends TestFunctionArgs_Base {
    multiSelection: MultiSelectionFixtures;
}

export interface MultiSelectionFixtures {
    parent: Locator;
    children: Locator;
    tests: {
        ariaStatesFollowSelection: typeof ariaStatesFollowSelection,
        noAriaStatesWhenDisabled: typeof noAriaStatesWhenDisabled,
        multiSelectionFollowsFocus: typeof multiSelectionFollowsFocus,
        multiSelectionFollowsActivation: typeof multiSelectionFollowsActivation
    }
}


export const test = base.extend<{ multiSelection: MultiSelectionFixtures }>({
    page: async ({ page }, use) => {
        await page.goto("?test-base=multi-selection");
        await use(page);
    },
    multiSelection: async ({ shared: { focusableFirst, locator } }: TestFunctionArgs_Base, use) => {
        const parent = locator.locator('ol');
        const children = parent.locator('li');
        await expect(locator).toBeAttached();
        await expect(parent).toBeAttached();
        await use({
            parent,
            children,
            tests: {
                ariaStatesFollowSelection,
                noAriaStatesWhenDisabled,
                multiSelectionFollowsFocus,
                multiSelectionFollowsActivation
            }
        });

        return;


    }
});



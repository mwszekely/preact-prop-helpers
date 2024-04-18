
import { Locator, expect } from "@playwright/test";
import { TestFunctionArgs_Base, test as base } from "./base.fixture.js";
import { ariaStatesFollowSelection, noAriaStatesWhenDisabled, oobSelectionsMoveFocusToClosest, singleSelectionFollowsActivation, singleSelectionFollowsFocus, tabOrderIsRememberedAfterSelection } from "./single-selection.tests.js";

export interface TestFunctionArgs_SingleSelection extends TestFunctionArgs_Base {
    singleSelection: SingleSelectionFixtures;
}

export interface SingleSelectionFixtures {
    parent: Locator;
    children: Locator;
    tests: {
        ariaStatesFollowSelection: typeof ariaStatesFollowSelection,
        noAriaStatesWhenDisabled: typeof noAriaStatesWhenDisabled,
        singleSelectionFollowsFocus: typeof singleSelectionFollowsFocus,
        singleSelectionFollowsActivation: typeof singleSelectionFollowsActivation,
        tabOrderIsRememberedAfterSelection: typeof tabOrderIsRememberedAfterSelection,
        oobSelectionsMoveFocusToClosest: typeof oobSelectionsMoveFocusToClosest
    }
}


export const test = base.extend<{ singleSelection: SingleSelectionFixtures }>({
    page: async ({ page }, use) => {
        await page.goto("?test-base=single-selection");
        await use(page);
    },
    singleSelection: async ({ shared: { focusableFirst, locator } }: TestFunctionArgs_Base, use) => {
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
                singleSelectionFollowsFocus,
                singleSelectionFollowsActivation,
                tabOrderIsRememberedAfterSelection,
                oobSelectionsMoveFocusToClosest
            }
        });

        return;


    }
});



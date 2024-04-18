import { expect } from "@playwright/test";
import { test } from "./single-selection.fixture.js";

test("ARIA states follow selection", async ({ shared, singleSelection }) => {
    await singleSelection.tests.ariaStatesFollowSelection({ shared, singleSelection });
    await expect(true).toBeTruthy();
});

test("No ARIA states when disabled", async ({ shared, singleSelection }) => {
    await singleSelection.tests.noAriaStatesWhenDisabled({ shared, singleSelection });
    await expect(true).toBeTruthy();
});

test("Single selection can follow focus", async ({ shared, singleSelection }) => {
    await singleSelection.tests.singleSelectionFollowsFocus({ shared, singleSelection });
    await expect(true).toBeTruthy();
});

test("Single selection can follow activation", async ({ shared, singleSelection, page }) => {
    await singleSelection.tests.singleSelectionFollowsActivation({ shared, singleSelection, page });
    await expect(true).toBeTruthy();
});

test("Tab order is remembered after selection", async ({ page, shared, singleSelection }) => {
    await singleSelection.tests.tabOrderIsRememberedAfterSelection({ page, shared, singleSelection });
    await expect(true).toBeTruthy();
});

test("Selecting a non-existent item focuses the closest neighbor", async ({ singleSelection, page, shared }) => {
    await singleSelection.tests.oobSelectionsMoveFocusToClosest({ singleSelection, page, shared });
    await expect(true).toBeTruthy();
});





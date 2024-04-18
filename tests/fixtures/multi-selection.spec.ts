import { expect } from "@playwright/test";
import { test } from "./multi-selection.fixture.js";

test("ARIA states follow selection", async ({ shared, multiSelection }) => {
    await multiSelection.tests.ariaStatesFollowSelection({ shared, multiSelection });
    await expect(true).toBeTruthy();
});

test("No ARIA states when disabled", async ({ shared, multiSelection }) => {
    await multiSelection.tests.noAriaStatesWhenDisabled({ shared, multiSelection });
    await expect(true).toBeTruthy();
});

test("Multi selection can follow focus", async ({ shared, multiSelection }) => {
    await multiSelection.tests.multiSelectionFollowsFocus({ shared, multiSelection });
    await expect(true).toBeTruthy();
});

test("Multi selection can follow activation", async ({ shared, multiSelection, page }) => {
    await multiSelection.tests.multiSelectionFollowsActivation({ shared, multiSelection, page });
    await expect(true).toBeTruthy();
});




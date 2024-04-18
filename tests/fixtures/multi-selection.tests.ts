import { expect } from "@playwright/test";
import type { TestFunctionArgs_MultiSelection } from "./multi-selection.fixture.js";

export async function ariaStatesFollowSelection({ shared, multiSelection }: Pick<TestFunctionArgs_MultiSelection, "multiSelection" | "shared">) {
    const childCount = await multiSelection.children.count();
    await shared.run("MultiSelection", "setMultiSelectionMode", "activation");

    // Nothing is selected--all children should read "false"
    for (let i = 0; i < childCount; ++i) {
        await expect(multiSelection.children.nth(i)).toHaveAttribute("aria-checked", "false");
    }

    // Select a new index, only it should be "true" and all others "false".
    let newIndex1 = 4;
    let newIndex2 = 6;
    await shared.run("MultiSelectionChild", `setMultiSelected_${newIndex1}`, true);
    await shared.run("MultiSelectionChild", `setMultiSelected_${newIndex2}`, true);

    for (let i = 0; i < childCount; ++i) {
        await expect(multiSelection.children.nth(i)).toHaveAttribute("aria-checked", (i == newIndex1 || i == newIndex2) ? "true" : "false");
    }

    await shared.run("MultiSelectionChild", `setMultiSelected_${newIndex1}`, false);
    for (let i = 0; i < childCount; ++i) {
        await expect(multiSelection.children.nth(i)).toHaveAttribute("aria-checked", i == newIndex2 ? "true" : "false");
    }
}

export async function noAriaStatesWhenDisabled({ shared, multiSelection }: Pick<TestFunctionArgs_MultiSelection, "multiSelection" | "shared">) {
    const childCount = await multiSelection.children.count();
    await shared.run("MultiSelection", "setMultiSelectionMode", "activation");
    await shared.run("MultiSelectionChild", "setMultiSelected_5", true);
    await shared.run("MultiSelection", "setMultiSelectionMode", "disabled");
    for (let i = 0; i < childCount; ++i) {
        await expect(multiSelection.children.nth(i)).not.toHaveAttribute("aria-checked");
    }
}

export async function multiSelectionFollowsFocus({ shared, multiSelection }: Pick<TestFunctionArgs_MultiSelection, "multiSelection" | "shared">) {
    await shared.focusableFirst.focus();

    await shared.run("MultiSelection", "setMultiSelectionMode", "focus");
    await multiSelection.children.nth(4).focus();
    await expect(multiSelection.children.nth(4)).toHaveAttribute("aria-checked", "true");
    await multiSelection.children.nth(7).focus();
    await expect(multiSelection.children.nth(4)).toHaveAttribute("aria-checked", "false");
    await expect(multiSelection.children.nth(7)).toHaveAttribute("aria-checked", "true");
}

export async function multiSelectionFollowsActivation({ shared, multiSelection, page }: Pick<TestFunctionArgs_MultiSelection, "page" | "multiSelection" | "shared">) {
    await shared.focusableFirst.focus();

    let i0 = 4;
    let i1 = i0 + 1;
    let i2 = i1 + 1;
    let i3 = i2 + 1;

    await shared.run("MultiSelection", "setMultiSelectionMode", "activation");
    await multiSelection.children.nth(i1).focus();
    await expect(multiSelection.children.nth(i1)).toHaveAttribute("aria-checked", "false");
    await multiSelection.children.nth(i1).click();
    await expect(multiSelection.children.nth(i1)).toHaveAttribute("aria-checked", "true");

    await multiSelection.children.nth(i2).focus();
    await expect(multiSelection.children.nth(i2)).toHaveAttribute("aria-checked", "false");
    await page.keyboard.press("Enter");
    await expect(multiSelection.children.nth(i2)).toHaveAttribute("aria-checked", "true");
    await expect(multiSelection.children.nth(i1)).toHaveAttribute("aria-checked", "true");

    await multiSelection.children.nth(i3).focus();
    await expect(multiSelection.children.nth(i3)).toHaveAttribute("aria-checked", "false");
    await page.keyboard.down("Space");
    await expect(multiSelection.children.nth(i3)).toHaveAttribute("aria-checked", "false");
    await page.keyboard.up("Space");
    await expect(multiSelection.children.nth(i3)).toHaveAttribute("aria-checked", "true");
    await expect(multiSelection.children.nth(i2)).toHaveAttribute("aria-checked", "true");
    await expect(multiSelection.children.nth(i1)).toHaveAttribute("aria-checked", "true");
}

/*
export async function tabOrderIsRememberedAfterSelection({ page, shared, multiSelection }: Pick<TestFunctionArgs_MultiSelection, "page" | "multiSelection" | "shared">) {
    await shared.focusableFirst.focus();
    await multiSelection.children.nth(4).focus();
    await page.keyboard.press("Shift+Tab");
    await expect(shared.focusableFirst).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(multiSelection.children.nth(4)).toBeFocused();
}

export async function oobSelectionsMoveFocusToClosest({ page, shared, multiSelection }: Pick<TestFunctionArgs_MultiSelection, "page" | "multiSelection" | "shared">) {
    const childCount = await multiSelection.children.count();
    await shared.focusableFirst.focus();
    await shared.run("MultiSelection", "setMultiSelectedIndex", 9999999);
    await page.keyboard.press("Tab");
    await expect(multiSelection.children.nth(childCount - 1)).toBeFocused();
}*/


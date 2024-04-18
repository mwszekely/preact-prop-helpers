import { expect } from "@playwright/test";
import type { TestFunctionArgs_SingleSelection } from "./single-selection.fixture.js";

export async function ariaStatesFollowSelection({ shared, singleSelection }: Pick<TestFunctionArgs_SingleSelection, "singleSelection" | "shared">) {
    const childCount = await singleSelection.children.count();
    await shared.run("SingleSelection", "setSingleSelectionMode", "focus");

    // Nothing is selected--all children should read "false"
    await shared.run("SingleSelection", "setSingleSelectedIndex", null);
    for (let i = 0; i < childCount; ++i) {
        await expect(singleSelection.children.nth(i)).toHaveAttribute("aria-selected", "false");
    }

    // Select a new index, only it should be "true" and all others "false".
    let newIndex = 4;
    await shared.run("SingleSelection", "setSingleSelectedIndex", newIndex);

    for (let i = 0; i < childCount; ++i) {
        await expect(singleSelection.children.nth(i)).toHaveAttribute("aria-selected", i == newIndex ? "true" : "false");
    }
}

export async function noAriaStatesWhenDisabled({ shared, singleSelection }: Pick<TestFunctionArgs_SingleSelection, "singleSelection" | "shared">) {
    const childCount = await singleSelection.children.count();
    await shared.run("SingleSelection", "setSingleSelectionMode", "focus");
    await shared.run("SingleSelection", "setSingleSelectedIndex", 5);
    await shared.run("SingleSelection", "setSingleSelectionMode", "disabled");
    for (let i = 0; i < childCount; ++i) {
        await expect(singleSelection.children.nth(i)).not.toHaveAttribute("aria-selected");
    }
}

export async function singleSelectionFollowsFocus({ shared, singleSelection }: Pick<TestFunctionArgs_SingleSelection, "singleSelection" | "shared">) {
    await shared.focusableFirst.focus();

    await shared.run("SingleSelection", "setSingleSelectionMode", "focus");
    await singleSelection.children.nth(4).focus();
    await expect(singleSelection.children.nth(4)).toHaveAttribute("aria-selected", "true");
    await singleSelection.children.nth(7).focus();
    await expect(singleSelection.children.nth(4)).toHaveAttribute("aria-selected", "false");
    await expect(singleSelection.children.nth(7)).toHaveAttribute("aria-selected", "true");
}

export async function singleSelectionFollowsActivation({ shared, singleSelection, page }: Pick<TestFunctionArgs_SingleSelection, "page" | "singleSelection" | "shared">) {
    await shared.focusableFirst.focus();

    let i = 4;

    await shared.run("SingleSelection", "setSingleSelectionMode", "activation");
    await singleSelection.children.nth(i).focus();
    await expect(singleSelection.children.nth(i)).toHaveAttribute("aria-selected", "false");
    await singleSelection.children.nth(i).click();
    await expect(singleSelection.children.nth(i)).toHaveAttribute("aria-selected", "true");

    ++i;
    await singleSelection.children.nth(i).focus();
    await expect(singleSelection.children.nth(i)).toHaveAttribute("aria-selected", "false");
    await page.keyboard.press("Enter");
    await expect(singleSelection.children.nth(i)).toHaveAttribute("aria-selected", "true");

    ++i;
    await singleSelection.children.nth(i).focus();
    await expect(singleSelection.children.nth(i)).toHaveAttribute("aria-selected", "false");
    await page.keyboard.down("Space");
    await expect(singleSelection.children.nth(i)).toHaveAttribute("aria-selected", "false");
    await page.keyboard.up("Space");
    await expect(singleSelection.children.nth(i)).toHaveAttribute("aria-selected", "true");
}

export async function tabOrderIsRememberedAfterSelection({ page, shared, singleSelection }: Pick<TestFunctionArgs_SingleSelection, "page" | "singleSelection" | "shared">) {
    await shared.focusableFirst.focus();
    await singleSelection.children.nth(4).focus();
    await page.keyboard.press("Shift+Tab");
    await expect(shared.focusableFirst).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(singleSelection.children.nth(4)).toBeFocused();

}

export async function oobSelectionsMoveFocusToClosest({ page, shared, singleSelection }: Pick<TestFunctionArgs_SingleSelection, "page" | "singleSelection" | "shared">) {
    const childCount = await singleSelection.children.count();
    await shared.focusableFirst.focus();
    await shared.run("SingleSelection", "setSingleSelectedIndex", 9999999);
    await page.keyboard.press("Tab");
    await expect(singleSelection.children.nth(childCount - 1)).toBeFocused();
}


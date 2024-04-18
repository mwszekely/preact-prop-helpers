import { expect } from "@playwright/test";
import { test } from "./roving-tab-index.fixture.js";

test("Tabbing in focuses the first child", async ({ rovingTabIndex, page, shared }) => {
    await rovingTabIndex.tests.basics({ rovingTabIndex, page, shared });
    expect(true).toBeTruthy();
});

// Make sure that tabbing into a component doesn't allow it to focus a non-existent child.
test("Untabbable children are skipped when tabbed into", async ({ rovingTabIndex, page, shared }) => {
    await rovingTabIndex.tests.untabbableChildrenAreSkipped({ rovingTabIndex, page, shared });
    expect(true).toBeTruthy();
});

// Make sure that, apropos of anything else, 
test("The last tabbed index is remembered when focus leaves", async ({ rovingTabIndex, page, shared }) => {
    await rovingTabIndex.tests.lastTabbedIndexIsRemembered({ rovingTabIndex, page, shared });
    expect(true).toBeTruthy();
});

test("Clicking a child focuses it", async ({ rovingTabIndex, shared }) => {
    await rovingTabIndex.tests.focusMovesViaClick({ rovingTabIndex });
    expect(true).toBeTruthy();
});

// Set the first X children to be untabbable, then click on one of them.
// The child at X+1 should be focused as a result.
test("Clicking a missing child focuses a nearby neighbor", async ({ rovingTabIndex, shared }) => {
    await rovingTabIndex.tests.unfocusableMovesToNearestNeighbor({ rovingTabIndex, shared });
    expect(true).toBeTruthy();
});

// Set the first X children to be untabbable, then click on one of them.
// The child at X+1 should be focused as a result.
test("It should not focus itself on mount", async ({ rovingTabIndex, shared }) => {
    await rovingTabIndex.tests.dontFocusOnMount({ shared, rovingTabIndex });
    expect(true).toBeTruthy();
});







// NOTE: Tests below this comment are not inheritable by useCompleteListNavigation
// (usually because it overrides a parameter and explicitly doesn't allow customization of it)

// By default, the 0th child is the focusable one. Make sure it's overridable.
test("initiallyTabbableIndex works for non-zero values", async ({ rovingTabIndex, page, shared }) => {
    await rovingTabIndex.tests.initiallyTabbableIndexWorks({ rovingTabIndex, page, shared });
    expect(true).toBeTruthy();
});


import { expect } from '@playwright/test';
import { LoremIpsum } from '../lorem.js';
import { DefaultDisabledIndex, DefaultHiddenIndex, DefaultMissingIndex } from './list-nav.constants.js';
import { test } from "./list-nav.fixture.js";

test("The 0th item is tabbable by default", async ({ page, listNav, shared: { getRenderCount } }) => {
    await page.keyboard.press("Tab");
    await expect(page.locator("li").nth(0)).toBeFocused();
})

test("Navigation with arrow keys works", async ({ page, listNav: { list, items }, shared: { getRenderCount } }) => {

    await page.keyboard.press("Tab");

    let itemIndex = 0;
    while (itemIndex < await items.count()) {
        if (itemIndex != DefaultHiddenIndex && itemIndex != DefaultMissingIndex) {
            await expect(page.locator("li").nth(itemIndex)).toBeFocused();
            await page.keyboard.press("ArrowDown");
        }
        ++itemIndex;
    }
    await expect(page.locator("li").last()).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator("li").last()).toBeFocused();

    do {
        --itemIndex;
        if (itemIndex != DefaultHiddenIndex && itemIndex != DefaultMissingIndex) {
            await expect(page.locator("li").nth(itemIndex)).toBeFocused();
            await page.keyboard.press("ArrowUp");
        }

    } while (itemIndex > 0);

    await expect(page.locator("li").first()).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(page.locator("li").first()).toBeFocused();
});

/*
test("Navigation among rearranged items works", async ({ page, listNav: { list, items, reduceChildren, resetChildCount, shuffleChildren }, shared: { getRenderCount } }) => {
    
    await page.keyboard.press("Tab");
    await shuffleChildren();
    await expect(page.locator("li").nth(0)).toBeFocused();
    await new Promise(resolve => setTimeout(resolve, 500));
    let max = await items.count();
    let lastSeen = -1;
    for (let i = 0; i < max; ++i) {
        items.
    }
})*/

test("Navigation with Home/End works", async ({ page, listNav: { list, items }, shared: { getRenderCount } }) => {

    await page.keyboard.press("Tab");

    await page.keyboard.press("End");
    await expect(items.last(), "Pressing End should focus the final element").toBeFocused();
    await page.keyboard.press("Home");
    await expect(items.first(), "Pressing home should focus the first element").toBeFocused();
})

test("Navigation with typeahead works", async ({ page, listNav: { list, items }, shared: { getRenderCount } }) => {

    await page.keyboard.press("Tab");
    await page.keyboard.type(LoremIpsum[DefaultHiddenIndex - 1]);
    await expect(items.nth(DefaultHiddenIndex - 1), `Typeahead should work as expected`).toBeFocused();
})


test("Focus should not be stolen when mounting/unmounting", async ({ page, listNav: { list }, shared: { run, install, focusableFirst, focusableLast } }) => {
    await focusableFirst.focus();

    await run("ListNav", "setMounted", false);

    await expect(focusableFirst, "Unmounting a list should not move focus").toBeFocused();
    await run("ListNav", "setMounted", true);
    await expect(focusableFirst, "Mounting a list should not move focus").toBeFocused();
});


test("Focus should not be stolen when selecting an index", async ({ page, listNav: { list }, shared: { run, install, focusableFirst, focusableLast } }) => {
    await focusableFirst.focus();

    await run("ListNav", "setSelectedIndex", 5);
    await expect(focusableFirst, "Selecting a list item should not move focus if the list is not focused").toBeFocused();
    await run("ListNav", "setUntabbable", true);
    await expect(focusableFirst, "Changing a list to untabbable should not move focus if the list is not focused").toBeFocused();
    await run("ListNav", "setUntabbable", false);
    await expect(focusableFirst, "Changing a list to being tabbable should not move focus if the list is not focused").toBeFocused();
});


test("Focus is preserved when the focused child is unmounted", async ({ page, listNav: { list }, shared: { run, install, focusableFirst, focusableLast } }) => {

    let count = 20;
    await run("ListNav", "setChildCount", count);
    await focusableFirst.focus();
    await page.keyboard.press("Tab");
    await page.keyboard.press("End");
    await expect(page.locator("li").nth(count - 1), `(Redundant)`).toBeFocused();

    // TODO: Chrome-only test-env-only requirement????
    // I have no clue why it's specific to both because it's hard to test--
    // it doesn't seem to happen in practice at all,
    // but it fails at the body focus test otherwise.
    // Again, only in Chrome, and only in the test environment
    await new Promise(resolve => setTimeout(resolve, 20));


    // Ensure that as we decrease the # of children,
    // focus is managed properly and never gets sent to the body.
    for (let c = count; c >= 0; --c) {



        await run("ListNav", "setChildCount", c);
        //await new Promise(resolve => setTimeout(resolve, 100));
        let next = c - 1;
        if (next == DefaultMissingIndex || next == DefaultHiddenIndex)
            next -= 1;

        // A non-existent element can't be focused, so this line would always error
        //await expect(page.locator("li").nth(c), `After setting the child count to ${c}, the ${c}-th child should no longer be focused.`).not.toBeFocused();

        //await new Promise(resolve => setTimeout(resolve, 100));
        await expect(page.locator("body"), `Unmounting the focused child child should not focus the body`).not.toBeFocused();
        //await new Promise(resolve => setTimeout(resolve, 100));

        if (next == -1)
            await expect.soft(focusableLast).toBeFocused();
        else
            await expect(page.locator("li").nth(next), `After setting the child count to ${c}, the ${next}-th child should be focused.`).toBeFocused();
    }
});

test("Clicking a child focuses it", async ({ page, shared: { focusableFirst, focusableLast }, listNav: { items } }) => {
    let l;
    await items.nth(l = 2).click({ force: true });
    await expect(items.nth(l)).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(items.nth(l = 1)).toBeFocused();
    await page.keyboard.press("Tab")
    await expect(focusableLast).toBeFocused();
    await page.keyboard.press("Shift+Tab")
    await expect(items.nth(l)).toBeFocused();

    await items.nth(DefaultMissingIndex).click({ force: true });
    await expect(page.locator("body")).not.toBeFocused();
    await expect(items.nth(l)).toBeFocused();

    await items.nth(l = DefaultDisabledIndex).click({ force: true });
    await expect(items.nth(l)).toBeFocused();

    await items.nth(DefaultHiddenIndex).click({ force: true });
    await expect(page.locator("body")).not.toBeFocused();
    await expect(items.nth(l)).toBeFocused();

})


test("Focus is not stolen when a child is unmounted while the list is not focused", async ({ page, listNav: { list }, shared: { run, install, focusableFirst, focusableLast } }) => {

    let count = 20;
    await run("ListNav", "setChildCount", count);
    await focusableFirst.focus();
    await page.keyboard.press("Tab");
    await page.keyboard.press("End");
    await expect(page.locator("li").nth(count - 1), `(Redundant)`).toBeFocused();

    // Now do it again, but make sure that focus isn't touched if the list isn't focused.
    await focusableLast.focus();
    for (let c = count - 1; c >= 0; --c) {
        await run("ListNav", "setChildCount", c);
        let next = c - 1;
        if (next == DefaultMissingIndex || next == DefaultHiddenIndex)
            next -= 1;

        await expect(focusableLast, `Focus should not be moved because the list is not focused`).toBeFocused();
    }
});


test("Focus is preserved when the list becomes untabbable", async ({ page, listNav, shared: { run, install } }) => {
    // When tabbing into the list, it should focus each item but not select anything.
    // Move down to the second item, because we're about to make sure that focus is restored properly,
    // and "is the second item still focusable" is a more durable question than "is the 0th child still focusable"
    await install("ListNav", "onSelectedIndexChange", async (i) => { await run("ListNav", "setSelectedIndex", i) })
    await page.keyboard.press("Tab");
    await expect(listNav.list.locator("li:nth-child(1)")).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(listNav.list.locator("li:nth-child(2)")).toBeFocused();
    await expect(listNav.list.locator("[aria-selected=true]")).toBeHidden();

    // When it becomes untabbable when focus is inside of it, focus moves to the list itself
    await run("ListNav", "setUntabbable", true);
    await expect(listNav.list).toBeFocused();
    await new Promise(resolve => setTimeout(resolve, 400));

    // And if it becomes tabbable again, focus should return to the most recently focus item
    await run("ListNav", "setUntabbable", false);
    await new Promise(resolve => setTimeout(resolve, 400));
    await expect(listNav.list.locator("li:nth-child(2)")).toBeFocused();

    // If we select an item, then move away from it,
    // then become untabbable and tabbable again, focus should be
    // restored to the last *selected* item specifically.
    //
    // (This is just a more specific case of tabbing out and then tabbing back in)
    await listNav.list.locator("li:nth-child(3)").click();
    await expect(listNav.list.locator("li:nth-child(3)")).toBeFocused();
    await expect(listNav.list.locator("li:nth-child(3)")).toHaveAttribute("aria-selected", "true");
    await page.keyboard.down("ArrowUp");
    await expect(listNav.list.locator("li:nth-child(2)")).toBeFocused();
    await expect(listNav.list.locator("li:nth-child(3)")).toHaveAttribute("aria-selected", "true");
    await run("ListNav", "setUntabbable", true);
    await expect(listNav.list).toBeFocused();
    await run("ListNav", "setUntabbable", false);
    // TODO: Should focus return to the selected item, or the last focused item?
    // It's generally the selected item, which is what's tested for here:
    await expect(listNav.list.locator("li:nth-child(3)")).toBeFocused();
    await expect(listNav.list.locator("li:nth-child(3)")).toHaveAttribute("aria-selected", "true");

    /*await listNav.list.locator("li:nth-child(2)").focus();
    await expect(listNav.list.locator("li:nth-child(1)")).toBeFocused();
    await run("ListNav", "setUntabbable", true);
    await expect(listNav.list.locator("li:nth-child(2)")).not.toBeFocused();
    await expect(listNav.list).toBeFocused();*/
});

test("Selection", async ({ page, listNav, shared: { run, install } }) => {
    await run("ListNav", "setSingleSelectionMode", "activation");

    // Before we install the onSelectedIndexChange handler, there should be no way to activate the list.
    await listNav.list.locator(`li:nth-child(${1})`).click({ force: true });
    await expect(listNav.list.locator("[aria-selected=true]").first()).toBeHidden();


    // Install the handler and continue normally.
    await install("ListNav", "onSelectedIndexChange", async (i) => { await run("ListNav", "setSelectedIndex", i) });
    await expect(listNav.list.locator("[aria-selected=true]").first()).toBeHidden();

    // Test the first 10 items, some of which have special properties related to selection (being disabled, hidden, etc.)
    for (let i = 0; i < 10; ++i) {
        await listNav.list.locator(`li`).nth(i).click({ force: true });
        if (i == DefaultMissingIndex) {
            await expect(listNav.list.locator(`li`).nth(i).first()).not.toBeFocused();
            await expect(listNav.list.locator(`li`).nth(i).first()).not.toHaveAttribute("aria-selected", "true");
        }
        else if (i === DefaultDisabledIndex) {
            await expect(listNav.list.locator(`li`).nth(i)).toBeFocused();
            await expect(listNav.list.locator(`li`).nth(i)).not.toHaveAttribute("aria-selected", "true");
        }
        else if (i === DefaultHiddenIndex) {
            await expect(listNav.list.locator(`li`).nth(i)).not.toBeFocused();
            await expect(listNav.list.locator(`li`).nth(i)).not.toHaveAttribute("aria-selected", "true");
        }
        else {
            await expect(listNav.list.locator(`li`).nth(i)).toBeFocused();
            await expect(listNav.list.locator(`li`).nth(i)).toHaveAttribute("aria-selected", "true");
        }
    }

    // Pressing space to select a list item should work
    await listNav.list.locator(`li:first-child`).focus();
    await expect(listNav.list.locator(`li:first-child`).first()).not.toHaveAttribute("aria-selected", "true");
    await page.keyboard.press("Space");
    await expect(listNav.list.locator(`li:first-child`).first()).toHaveAttribute("aria-selected", "true");

    // After typing, the second item should be focused, but not selected, despite the text containing multiple spaces.
    await page.keyboard.type(LoremIpsum[1]);
    expect(LoremIpsum[1].includes(" ")).toBeTruthy();
    await expect(listNav.list.locator("li:nth-child(2)")).toBeFocused();
    await expect(listNav.list.locator(`li:first-child`).first()).toHaveAttribute("aria-selected", "true");
});

test("Pagination", async ({ page, listNav, shared: { focusableFirst, focusableLast, install, run } }) => {
    let count = 200;
    let max = count - 1;  // There's always one "missing" list item that will never have any of the attributes we're looking for.
    await expect(focusableFirst).toBeFocused();
    await run("ListNav", "setMounted", false);
    await expect(focusableFirst).toBeFocused();
    await run("ListNav", "setChildCount", count);
    await expect(focusableFirst).toBeFocused();
    await run("ListNav", "setPagination", [10, 20]);
    await expect(focusableFirst).toBeFocused();
    await run("ListNav", "setMounted", true);
    await expect(focusableFirst).toBeFocused();

    await expect(listNav.list.locator("li[data-hide-because-paginated=false]")).toHaveCount(10);

    await expect(listNav.list.locator("li:nth-child(5)")).toHaveAttribute("data-hide-because-paginated", "true");
    await expect(listNav.list.locator("li:nth-child(15)")).toHaveAttribute("data-hide-because-paginated", "false");
    await expect(listNav.list.locator("li:nth-child(25)")).toHaveAttribute("data-hide-because-paginated", "true");
    await page.keyboard.press("Tab");
    await expect(listNav.list.locator("li").nth(10)).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(listNav.list.locator("li").nth(10), "Pressing up should keep focus on the topmost list item").toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(listNav.list.locator("li").nth(11), "Pressing down should now focus the 11th item -- it should not get stuck or jump anywhere else").toBeFocused();
    await page.keyboard.press("End");
    await expect(listNav.list.locator("li").nth(19), "Pressing End should focus the last item within the paginated range").toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(listNav.list.locator("li").nth(19), "Pressing down should keep the focus on the last list item within the paginated range").toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(listNav.list.locator("li").nth(18), "Pressing up should keep focus on the topmost list item").toBeFocused();

    await run("ListNav", "setPagination", [20, 30]);
    await expect(listNav.list.locator("li:nth-child(15)"), "Child 15 should be hidden by a window of [20,30]").toHaveAttribute("data-hide-because-paginated", "true");
    await expect(listNav.list.locator("li:nth-child(25)"), "Child 25 should NOT be hidden by a window of [20,30]").toHaveAttribute("data-hide-because-paginated", "false");
    await expect(listNav.list.locator("li:nth-child(35)"), "Child 35 should be hidden by a window of [20,30]").toHaveAttribute("data-hide-because-paginated", "true");
    await expect(listNav.list.locator("li").nth(10), "Child 10, previously focused, should not be focused once it is hidden by pagination").not.toBeFocused();
    await expect(page.locator("body"), "After pagination unmounts a focused child, focus must be sent somewhere that's not the body").not.toBeFocused();

    // TODO:
    // This is not a *huge* deal, since at least the body's not focused,
    // AND ALSO usually pagination is controlled by the user, meaning focus will be somewhere else on the page anyway.
    // But...for the rare cases where pagination is controlled by, like, a keyboard shortcut or something, 
    // not fixing this would be annoying.
    // await expect.soft(listNav.list.locator("li").nth(21), "After pagination unmounts a focused child, focus should go to a visible child").toBeFocused();
})


test("Staggering", async ({ page, listNav, shared: { install, run } }) => {
    // Note: if `count` is too big (e.g. 200), then it takes longer than the timeout of 20000 to finish staggering them all.

    // TODO: This doesn't really test whether staggering takes place over time,
    // just whether it finishes at all.

    let count = 50;
    let max = count - 1;  // There's always one "missing" list item that will never have any of the attributes we're looking for.
    await run("ListNav", "setMounted", false);
    await run("ListNav", "setChildCount", count);
    await run("ListNav", "setStaggered", true);
    await run("ListNav", "setMounted", true);
    //await expect(20).toBeLessThan(50);
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(await listNav.list.locator("li").count()).toBe(count);
    //await expect(await listNav.list.locator("li[data-hide-because-staggered=false]").count()).toBeLessThan(count / 2);
    //await expect(await listNav.list.locator("li[data-hide-because-staggered=true]").count()).toBeGreaterThan(count / 2);
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(listNav.list.locator("li[data-hide-because-staggered]")).toHaveCount(max);
    await new Promise(resolve => setTimeout(resolve, 500));
    await expect(listNav.list.locator("li[data-hide-because-staggered=true]")).toHaveCount(0, { timeout: 20000 });
    await expect(listNav.list.locator("li[data-hide-because-staggered=false]")).toHaveCount(max, { timeout: 20000 });

    // Unmounting and re-mounting should cause it to happen again,
    // and we're also going to test adding children.
    await run("ListNav", "setMounted", false);
    await run("ListNav", "setChildCount", 100)
    await run("ListNav", "setMounted", true);
    await new Promise(resolve => setTimeout(resolve, 50));
    await expect(await listNav.list.locator("li[data-hide-because-staggered=false]").count()).toBeLessThan(50);
    //await expect(await listNav.list.locator("li[data-hide-because-staggered=true]").count()).toBeGreaterThan(50);

    await run("ListNav", "setChildCount", count)
    await expect(listNav.list.locator("li[data-hide-because-staggered=false]")).toHaveCount(max, { timeout: 20000 });
    await expect(listNav.list.locator("li[data-hide-because-staggered=true]")).toHaveCount(0, { timeout: 20000 });

    // Adding more children should "re-continue" the staggering effect.
    let newCount = count * 2;
    let newMax = newCount - 1;
    await run("ListNav", "setChildCount", newCount);
    await expect(await listNav.list.locator("li[data-hide-because-staggered=false]").count()).toBeGreaterThanOrEqual(max);
    //await expect(await listNav.list.locator("li[data-hide-because-staggered=true]").count()).toBeGreaterThan(50);
    await expect(listNav.list.locator("li[data-hide-because-staggered=true]")).toHaveCount(0, { timeout: 20000 });
    await expect(listNav.list.locator("li[data-hide-because-staggered=false]")).toHaveCount(newMax, { timeout: 20000 });

});
/*
test("Pagination", ({ page, listNav }) => {
});*/

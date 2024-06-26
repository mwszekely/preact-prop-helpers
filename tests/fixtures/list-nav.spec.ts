import { expect } from '@playwright/test';
import { LoremIpsum } from '../lorem.js';
import { DisabledIndex, HiddenIndex, MissingIndex } from './list-nav.constants.js';
import { test } from "./list-nav.fixture.js";



test("Navigation", async ({ page, listNav, shared: { getRenderCount } }) => {

    await test.step("Arrow key navigation works", async () => {
        //expect(getRenderCount("parent"), "Before anything happens, the list should only have rendered once").toBe(1);
        //expect(getRenderCount("children"), "Before anything happens, each child should only render itself once").toBe(DefaultChildCount);
        await page.keyboard.press("Tab");
        await expect(page.locator("li").nth(0), "The 0-th menu item should be focused by default").toBeFocused();
        //expect(getRenderCount("parent"), "After tabbing, the parent should not re-render itself").toBe(1);
        //expect(getRenderCount("children"), "After tabbing to the first child, nothing should change and no child should re-render").toBe(DefaultChildCount);
        await page.keyboard.press("ArrowDown");
        await expect(page.locator("li").nth(1), "Pressing down should focus the 1-th element").toBeFocused();
        //expect(getRenderCount("parent"), "Tabbing to a new child should not cause a re-render").toBe(1);
        //expect(getRenderCount("children"), "Tabbing to a new child should cause a max of 2 children to re-render themselves").toBe(DefaultChildCount + 2);
        await page.keyboard.press("ArrowDown");
        await expect(page.locator("li").nth(2), "Pressing down again should focus the 2-th element").toBeFocused();

        await page.locator("li").nth(DisabledIndex - 1).focus();
        await page.keyboard.press("ArrowDown");
        await expect(page.locator("li").nth(DisabledIndex), `The ${DisabledIndex}-th element is disabled, but can still be focused`).toBeFocused();


        await page.locator("li").nth(HiddenIndex - 1).focus();
        await page.keyboard.press("ArrowDown");
        await expect(page.locator("li").nth(HiddenIndex + 1), `The ${HiddenIndex}-th element is hidden, so it should not be focused when navigated to`).toBeFocused();
        await page.locator("li").nth(HiddenIndex).focus();
        await expect(page.locator("li").nth(HiddenIndex), `The ${HiddenIndex}-th element is hidden, so it should not be focused when clicked`).not.toBeFocused();

        await page.locator("li").nth(MissingIndex - 1).focus();
        await page.keyboard.press("ArrowDown");
        await expect(page.locator("li").nth(MissingIndex + 1), `The ${MissingIndex}-th element is missing, so the item after it should be focused`).toBeFocused();
        await page.locator("li").nth(MissingIndex).focus();
        await expect(page.locator("li").nth(MissingIndex), `The ${MissingIndex}-th element is missing -- how is it focused (when clicked)?`).not.toBeFocused();
    });

    await test.step("Home/end works", async () => {
        await page.keyboard.press("Home");
        await expect(page.locator("li").first(), "Pressing home should focus the first element").toBeFocused();
        await page.keyboard.press("End");
        await expect(page.locator("li").last(), "Pressing End should focus the final element").toBeFocused();
    });

    await test.step("Typeahead works", async () => {
        await page.keyboard.type(LoremIpsum[HiddenIndex - 1]);
        await expect(page.locator("li").nth(HiddenIndex - 1), `Typeahead should work as expected`).toBeFocused();
    });
});


test("Child mounting/unmounting", async ({ page, listNav: { list }, shared: { run, install, focusableFirst, focusableLast } }) => {
    let count = 10;
    await run("ListNav", "setChildCount", count);
    await page.locator("li").nth(count - 1).focus();

    // Ensure that as we decrease the # of children,
    // focus is managed properly and never gets sent to the body.
    for (let c = count - 1; c >= 0; --c) {
        await run("ListNav", "setChildCount", c);
        let next = c - 1;
        if (next == MissingIndex || next == HiddenIndex)
            next -= 1;
        if (next == -1)
            await expect.soft(focusableLast).toBeFocused();
        else
            await expect(page.locator("li").nth(next)).toBeFocused();
    }

    // That should still happen even if it's not decremented one by one
    count = 10;
    await run("ListNav", "setChildCount", count);
    await page.locator("li").nth(count - 1).focus();

    await run("ListNav", "setChildCount", 0);
    await expect.soft(focusableLast).toBeFocused();

    // Focus shouldn't move if it wasn't within the list
    count = 10;
    await run("ListNav", "setChildCount", count);
    await focusableFirst.focus();

    await run("ListNav", "setChildCount", 0);
    await focusableFirst.focus();
});

test("Untabbability works", async ({ page, listNav, shared: { run, install } }) => {
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
        if (i == MissingIndex) {
            await expect(listNav.list.locator(`li`).nth(i).first()).not.toBeFocused();
            await expect(listNav.list.locator(`li`).nth(i).first()).not.toHaveAttribute("aria-selected", "true");
        }
        else if (i === DisabledIndex) {
            await expect(listNav.list.locator(`li`).nth(i)).toBeFocused();
            await expect(listNav.list.locator(`li`).nth(i)).not.toHaveAttribute("aria-selected", "true");
        }
        else if (i === HiddenIndex) {
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
    await expect(listNav.list.locator("li:nth-child(15)")).toHaveAttribute("data-hide-because-paginated", "true");
    await expect(listNav.list.locator("li:nth-child(25)")).toHaveAttribute("data-hide-because-paginated", "false");
    await expect(listNav.list.locator("li:nth-child(35)")).toHaveAttribute("data-hide-because-paginated", "true");
    await expect(listNav.list.locator("li").nth(10)).not.toBeFocused();
    // TODO
    await expect(page.locator("body")).not.toBeFocused()
    await expect(listNav.list.locator("li").nth(20)).toBeFocused();
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

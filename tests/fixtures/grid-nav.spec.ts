import { Page, expect } from '@playwright/test';
import { test } from "./grid-nav.fixture.js"
import { LoremIpsum } from '../lorem.js';
import { DefaultChildCount, DisabledIndex, HiddenIndex, MissingIndex } from './grid-nav.constants.js';



test("Navigation", async ({ page, gridNav, shared: { getRenderCount } }) => {

    await test.step("Arrow key navigation works", async () => {
        //expect(getRenderCount("parent"), "Before anything happens, the grid should only have rendered once").toBe(1);
        //expect(getRenderCount("children"), "Before anything happens, each child should only render itself once").toBe(DefaultChildCount);
        await page.keyboard.press("Tab");
        await expect(page.locator("[role=row]").nth(0).locator("[role=cell]").nth(0), "The {x:0,y:0}-th item should be focused by default").toBeFocused();
        await page.keyboard.press("ArrowRight");
        await expect(page.locator("[role=row]").nth(0).locator("[role=cell]").nth(1), "The {x:1,y:0}-th item should be focused after pressing Right").toBeFocused();
        await page.keyboard.press("ArrowDown");
        await expect(page.locator("[role=row]").nth(1).locator("[role=cell]").nth(1), "The {x:1,y:1}-th item should be focused after pressing Down").toBeFocused();
        await page.keyboard.press("Tab");
        await expect(page.locator("#focusable-last")).toBeFocused();
        await page.keyboard.press("Shift+Tab");
        await expect(page.locator("[role=row]").nth(1).locator("[role=cell]").nth(1), "The focus should remain where it was after tabbing out and back in").toBeFocused();
        await page.keyboard.press("Shift+Tab");
        await expect(page.locator("#focusable-first")).toBeFocused();
        await page.keyboard.press("Tab");
        await expect(page.locator("[role=row]").nth(1).locator("[role=cell]").nth(1), "The focus should remain where it was after tabbing out and back in").toBeFocused();
        //expect(getRenderCount("parent"), "After tabbing, the parent should not re-render itself").toBe(1);
        //expect(getRenderCount("children"), "After tabbing to the first child, nothing should change and no child should re-render").toBe(DefaultChildCount);
        /*await page.keyboard.press("ArrowDown");
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
        await expect(page.locator("li").nth(MissingIndex), `The ${MissingIndex}-th element is missing -- how is it focused (when clicked)?`).not.toBeFocused();*/
    });

    /*await test.step("Home/end works", async () => {
        await page.keyboard.press("Home");
        await expect(page.locator("li").first(), "Pressing home should focus the first element").toBeFocused();
        await page.keyboard.press("End");
        await expect(page.locator("li").last(), "Pressing End should focus the final element").toBeFocused();
    });

    await test.step("Typeahead works", async () => {
        await page.keyboard.type(LoremIpsum[HiddenIndex - 1]);
        await expect(page.locator("li").nth(HiddenIndex - 1), `Typeahead should work as expected`).toBeFocused();
    });*/
});

/*
test("Untabbability works", async ({ page, gridNav, shared: { run, install } }) => {
    // When tabbing into the grid, it should focus each item but not select anything.
    // Move down to the second item, because we're about to make sure that focus is restored properly,
    // and "is the second item still focusable" is a more durable question than "is the 0th child still focusable"
    await install("GridNav", "onSelectedIndexChange", async (i) => { await run("GridNav", "setSelectedIndex", i) })
    await page.keyboard.press("Tab");
    await expect(gridNav.grid.locator("li:nth-child(1)")).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(gridNav.grid.locator("li:nth-child(2)")).toBeFocused();
    await expect(gridNav.grid.locator("[aria-selected=true]")).toBeHidden();

    // When it becomes untabbable when focus is inside of it, focus moves to the grid itself
    await run("GridNav", "setUntabbable", true);
    await expect(gridNav.grid).toBeFocused();
    await new Promise(resolve => setTimeout(resolve, 400));

    // And if it becomes tabbable again, focus should return to the most recently focus item
    await run("GridNav", "setUntabbable", false);
    await new Promise(resolve => setTimeout(resolve, 400));
    await expect(gridNav.grid.locator("li:nth-child(2)")).toBeFocused();

    // If we select an item, then move away from it,
    // then become untabbable and tabbable again, focus should be
    // restored to the last *selected* item specifically.
    //
    // (This is just a more specific case of tabbing out and then tabbing back in)
    await gridNav.grid.locator("li:nth-child(3)").click();
    await expect(gridNav.grid.locator("li:nth-child(3)")).toBeFocused();
    await expect(gridNav.grid.locator("li:nth-child(3)")).toHaveAttribute("aria-selected", "true");
    await page.keyboard.down("ArrowUp");
    await expect(gridNav.grid.locator("li:nth-child(2)")).toBeFocused();
    await expect(gridNav.grid.locator("li:nth-child(3)")).toHaveAttribute("aria-selected", "true");
    await run("GridNav", "setUntabbable", true);
    await expect(gridNav.grid).toBeFocused();
    await run("GridNav", "setUntabbable", false);
    await expect(gridNav.grid.locator("li:nth-child(3)")).toBeFocused();
    await expect(gridNav.grid.locator("li:nth-child(3)")).toHaveAttribute("aria-selected", "true");

});

test("Selection", async ({ page, gridNav, shared: { run, install } }) => {
    await run("GridNav", "setSelectionMode", "activation");

    // Before we install the onSelectedIndexChange handler, there should be no way to activate the grid.
    await gridNav.grid.locator(`li:nth-child(${1})`).click({ force: true });
    await expect(gridNav.grid.locator("[aria-selected=true]").first()).toBeHidden();


    // Install the handler and continue normally.
    await install("GridNav", "onSelectedIndexChange", async (i) => { await run("GridNav", "setSelectedIndex", i) });
    await expect(gridNav.grid.locator("[aria-selected=true]").first()).toBeHidden();

    // Test the first 10 items, some of which have special properties related to selection (being disabled, hidden, etc.)
    for (let i = 0; i < 10; ++i) {
        await gridNav.grid.locator(`li:nth-child(${i + 1})`).click({ force: true });
        if (i == MissingIndex) {
            await expect(gridNav.grid.locator(`li:nth-child(${i + 1})`).first()).not.toBeFocused();
            await expect(gridNav.grid.locator(`li:nth-child(${i + 1})`).first()).not.toHaveAttribute("aria-selected", "true");
        }
        else if (i === DisabledIndex) {
            await expect(gridNav.grid.locator(`li:nth-child(${i + 1})`).first()).toBeFocused();
            await expect(gridNav.grid.locator(`li:nth-child(${i + 1})`).first()).not.toHaveAttribute("aria-selected", "true");
        }
        else if (i === HiddenIndex) {
            await expect(gridNav.grid.locator(`li:nth-child(${i + 1})`).first()).not.toBeFocused();
            await expect(gridNav.grid.locator(`li:nth-child(${i + 1})`).first()).not.toHaveAttribute("aria-selected", "true");
        }
        else {
            await expect(gridNav.grid.locator(`li:nth-child(${i + 1})`).first()).toBeFocused();
            await expect(gridNav.grid.locator(`li:nth-child(${i + 1})`).first()).toHaveAttribute("aria-selected", "true");
        }
    }

    // Pressing space to select a grid item should work
    await gridNav.grid.locator(`li:first-child`).focus();
    await expect(gridNav.grid.locator(`li:first-child`).first()).not.toHaveAttribute("aria-selected", "true");
    await page.keyboard.press("Space");
    await expect(gridNav.grid.locator(`li:first-child`).first()).toHaveAttribute("aria-selected", "true");

    // After typing, the second item should be focused, but not selected, despite the text containing multiple spaces.
    await page.keyboard.type(LoremIpsum[1]);
    expect(LoremIpsum[1].includes(" ")).toBeTruthy();
    await expect(gridNav.grid.locator("li:nth-child(2)")).toBeFocused();
    await expect(gridNav.grid.locator(`li:first-child`).first()).toHaveAttribute("aria-selected", "true");
});

test("Pagination", async ({ page, gridNav, shared: { focusableFirst, focusableLast, install, run }}) => {
    let count = 200;
    let max = count - 1;  // There's always one "missing" grid item that will never have any of the attributes we're looking for.
    await expect(focusableFirst).toBeFocused();
    await run("GridNav", "setMounted", false);
    await expect(focusableFirst).toBeFocused();
    await run("GridNav", "setChildCount", count);
    await expect(focusableFirst).toBeFocused();
    await run("GridNav", "setPagination", [10, 20]);
    await expect(focusableFirst).toBeFocused();
    await run("GridNav", "setMounted", true);
    await expect(focusableFirst).toBeFocused();

    await expect(gridNav.grid.locator("li[data-hide-because-paginated=false]")).toHaveCount(10);

    await expect(gridNav.grid.locator("li:nth-child(5)")).toHaveAttribute("data-hide-because-paginated", "true");
    await expect(gridNav.grid.locator("li:nth-child(15)")).toHaveAttribute("data-hide-because-paginated", "false");
    await expect(gridNav.grid.locator("li:nth-child(25)")).toHaveAttribute("data-hide-because-paginated", "true");
    await page.keyboard.press("Tab");
    await expect(gridNav.grid.locator("li").nth(10)).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(gridNav.grid.locator("li").nth(10), "Pressing up should keep focus on the topmost grid item").toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(gridNav.grid.locator("li").nth(11), "Pressing down should now focus the 11th item -- it should not get stuck or jump anywhere else").toBeFocused();
    await page.keyboard.press("End");
    await expect(gridNav.grid.locator("li").nth(19), "Pressing End should focus the last item within the paginated range").toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(gridNav.grid.locator("li").nth(19), "Pressing down should keep the focus on the last grid item within the paginated range").toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(gridNav.grid.locator("li").nth(18), "Pressing up should keep focus on the topmost grid item").toBeFocused();
    
    await run("GridNav", "setPagination", [20, 30]);
    await expect(gridNav.grid.locator("li:nth-child(15)")).toHaveAttribute("data-hide-because-paginated", "true");
    await expect(gridNav.grid.locator("li:nth-child(25)")).toHaveAttribute("data-hide-because-paginated", "false");
    await expect(gridNav.grid.locator("li:nth-child(35)")).toHaveAttribute("data-hide-because-paginated", "true");
    await expect(gridNav.grid.locator("li").nth(10)).not.toBeFocused();
    // TODO
    await expect(page.locator("body")).not.toBeFocused()
    await expect(gridNav.grid.locator("li").nth(20)).toBeFocused();
})

test("Staggering", async ({ page, gridNav, shared: { install, run } }) => {
    let count = 200;
    let max = count - 1;  // There's always one "missing" grid item that will never have any of the attributes we're looking for.
    await run("GridNav", "setMounted", false);
    await run("GridNav", "setChildCount", count);
    await run("GridNav", "setStaggered", true);
    await run("GridNav", "setMounted", true);
    //await expect(20).toBeLessThan(50);
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(await gridNav.grid.locator("li").count()).toBe(count);
    await expect(await gridNav.grid.locator("li[data-hide-because-staggered=false]").count()).toBeLessThan(100);
    await expect(await gridNav.grid.locator("li[data-hide-because-staggered=true]").count()).toBeGreaterThan(100);
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(gridNav.grid.locator("li[data-hide-because-staggered]")).toHaveCount(max);
    await new Promise(resolve => setTimeout(resolve, 500));
    await expect(gridNav.grid.locator("li[data-hide-because-staggered=true]")).toHaveCount(0);
    await expect(gridNav.grid.locator("li[data-hide-because-staggered=false]")).toHaveCount(max);

    // Unmounting and re-mounting should cause it to happen again,
    // and we're also going to test adding children.
    await run("GridNav", "setMounted", false);
    await run("GridNav", "setChildCount", 100)
    await run("GridNav", "setMounted", true);
    await new Promise(resolve => setTimeout(resolve, 50));
    await expect(await gridNav.grid.locator("li[data-hide-because-staggered=false]").count()).toBeLessThan(50);
    //await expect(await gridNav.grid.locator("li[data-hide-because-staggered=true]").count()).toBeGreaterThan(50);

    await run("GridNav", "setChildCount", count)
    await expect(gridNav.grid.locator("li[data-hide-because-staggered=false]")).toHaveCount(max, { timeout: 20000 });
    await expect(gridNav.grid.locator("li[data-hide-because-staggered=true]")).toHaveCount(0, { timeout: 20000 });

    // Adding more children should "re-continue" the staggering effect.
    let newCount = count * 2;
    let newMax = newCount - 1;
    await run("GridNav", "setChildCount", newCount);
    await expect(await gridNav.grid.locator("li[data-hide-because-staggered=false]").count()).toBeGreaterThanOrEqual(max);
    //await expect(await gridNav.grid.locator("li[data-hide-because-staggered=true]").count()).toBeGreaterThan(50);
    await expect(gridNav.grid.locator("li[data-hide-because-staggered=true]")).toHaveCount(0, { timeout: 20000 });
    await expect(gridNav.grid.locator("li[data-hide-because-staggered=false]")).toHaveCount(newMax, { timeout: 20000 });

});
/*
test("Pagination", ({ page, gridNav }) => {
});*/

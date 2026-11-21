import { expect } from '@playwright/test';
import { test } from "./ref-element.fixture.js";


test("Mounting calls callback correctly", async ({ page, refElement: { changeA, changeB, mountA, mountB, unmountA, unmountB }, shared: { getRenderCount, run } }) => {
    await expect(changeA).toHaveText("0");
    await expect(changeB).toHaveText("0");
    await expect(mountA).toHaveText("0");
    await expect(mountB).toHaveText("0");
    await expect(unmountA).toHaveText("0");
    await expect(unmountB).toHaveText("0");
    await run("RefElement", "setAMounted", true);
    await run("RefElement", "setBMounted", true);
    await expect(changeA).toHaveText("1");
    await expect(changeB).toHaveText("1");
    await expect(mountA).toHaveText("1");
    await expect(mountB).toHaveText("1");
    await expect(unmountA).toHaveText("0");
    await expect(unmountB).toHaveText("0");
});

test("Unmounting calls callbacks correctly", async ({ page, refElement: { changeA, changeB, mountA, mountB, unmountA, unmountB }, shared: { getRenderCount, run } }) => {
    await run("RefElement", "setAMounted", true);
    await run("RefElement", "setBMounted", true);

    await run("RefElement", "setAMounted", false);
    await run("RefElement", "setBMounted", false);
    
    await expect(changeA).toHaveText("2");
    await expect(changeB).toHaveText("2");
    await expect(mountA).toHaveText("1");
    await expect(mountB).toHaveText("1");
    await expect(unmountA).toHaveText("1");
    await expect(unmountB).toHaveText("1");
});

test("Swapping keyed children does not call callbacks", async ({ page, refElement: { changeA, changeB, mountA, mountB, unmountA, unmountB }, shared: { getRenderCount, run } }) => {
    await run("RefElement", "setAMounted", true);
    await run("RefElement", "setBMounted", true);
    
    await run("RefElement", "setSwapped", true);

    await expect(changeA).toHaveText("1");
    await expect(changeB).toHaveText("1");
    await expect(mountA).toHaveText("1");
    await expect(mountB).toHaveText("1");
    await expect(unmountA).toHaveText("0");
    await expect(unmountB).toHaveText("0");
});

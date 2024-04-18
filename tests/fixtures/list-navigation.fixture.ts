
import { Locator, expect, mergeTests } from "@playwright/test";
import { TestFunctionArgs_Base } from "./base.fixture.js";
import { TestFunctionArgs_LinearNavigation, test as baseLn } from "./linear-navigation.fixture.js";
import { test as baseMs } from "./multi-selection.fixture.js";
import { TestFunctionArgs_RovingTabIndex, test as baseRti } from "./roving-tab-index.fixture.js";
import { TestFunctionArgs_SingleSelection, test as baseSs } from "./single-selection.fixture.js";

export interface TestFunctionArgs_ListNavigation extends TestFunctionArgs_Base, TestFunctionArgs_RovingTabIndex, TestFunctionArgs_LinearNavigation, TestFunctionArgs_SingleSelection {
    listNavigation: ListNavigationFixtures;
}


const merged = mergeTests(baseRti, baseLn, baseSs, baseMs);


export const test = merged.extend<{ listNavigation: ListNavigationFixtures }>({
    page: async ({ page }, use) => {
        await page.goto("?test-base=list-navigation");
        await use(page);
    },
    listNavigation: async ({ page, shared: { run, focusableFirst, focusableLast, locator } }, use) => {
        const parent = locator.locator('ol');
        const children = parent.locator('li');
        await expect(locator).toBeAttached();
        await expect(parent).toBeAttached();
        await use({
            list: parent,
            tests: {
                //inheritsWork,
            }
        });

        return;

    }
});

export interface ListNavigationFixtures {
    list: Locator;
    tests: {
        //inheritsWork: typeof inheritsWork;
    }
}
/*
async function inheritsWork(fixture: Pick<TestFunctionArgs_ListNavigation, "page" | "shared" | "listNavigation" | "linearNavigation" | "rovingTabIndex">) {
    let promises = new Array<Promise<void>>();
    const inherits: (keyof typeof fixture)[] = ["rovingTabIndex", "linearNavigation"];
    for (const fixtureName of inherits) {
        for (const testName in (fixture[fixtureName as never] as any).tests) {
            promises.push((fixture[fixtureName as never] as any).tests[testName](fixture));
        }
    }
    await Promise.all(promises);
}*/



/*
declare global {
    interface Window {
        increment(): Promise<void>;
    }
}

export const test = base.extend<{listNav: ListNavFixtures}>({
    listNav: async ({ page, shared: { focusableFirst, locator } }, use) => {
        await page.goto("?test-base=list-navigation");
        const list = locator.locator("[role=toolbar]");
        await focusableFirst.focus();
        await expect(list).toBeAttached();
        await use({ list });
    },
});

export interface ListNavFixtures {
    list: Locator;
}*/
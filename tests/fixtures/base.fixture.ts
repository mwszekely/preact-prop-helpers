import { Locator, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, test as base, expect } from "@playwright/test";
import { LoremIpsum } from "../lorem.js";
import { TestingConstants } from "../util.js";

export type TestFunctionArgs_Base =
    { shared: SharedFixtures; } &
    PlaywrightTestArgs & PlaywrightTestOptions & PlaywrightWorkerArgs & PlaywrightWorkerOptions;


declare global {
    interface Window {
        /**
         * Test-environment (not test-runner) only! Call to increment the internal counter that tests can check for.
         * @param key 
         */
        increment?(key?: string): Promise<void>;
        onRender?(id: string): Promise<void>;
    }
}

declare module globalThis {
    let installTestingHandler: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, func: TestingConstants[K][K2]) => void;
    let _TestingConstants: TestingConstants;
    let getTestingHandler: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2) => TestingConstants[K][K2];
}

declare global {
    let installTestingHandler: (typeof globalThis)["installTestingHandler"];
    let _TestingConstants: TestingConstants;
    let getTestingHandler: (typeof globalThis)["getTestingHandler"];
}

export const test = base.extend<{ shared: SharedFixtures }>({
    shared: async ({ page }: TestFunctionArgs_Base, use) => {

        let counters = new Map<string, number>();
        let renderCounts: Partial<Record<string, number>> = {};
        await page.exposeFunction("increment", (key?: string) => {
            const next = (counters.get(key || "") || 0) + 1;
            counters.set(key || "", next);
            return next;
        });
        await page.exposeFunction("onRender", (id: string) => { renderCounts[id] = ((renderCounts[id] ?? 0) + 1); });

        const focusableFirst = page.locator("#focusable-first");
        const focusableLast = page.locator("#focusable-last");
        //await expect(focusableFirst).toBeAttached();

        const run = async function run<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, ...args: TestingConstants[K][K2] extends (...args: any) => any ? Parameters<TestingConstants[K][K2]> : never): Promise<TestingConstants[K][K2] extends (...args: any) => any ? ReturnType<TestingConstants[K][K2]> : never> {
            return await page.evaluate(async ([key, Key2, ...args]: any[] | any) => {
                const handler = getTestingHandler<K, K2>(key, Key2) as (TestingConstants[K][K2] & Function);
                if (handler == null) {
                    throw new Error(`No component has called useTestSyncState("${key}", "${Key2}", ...)`)
                }
                return await handler(...(args as [any, any]));
            }, [key, Key2, ...args] as const);
        };

        const locator = page.locator(".tests-container");
        await use({
            getRenderCount(id: string) { return renderCounts[id] ?? 0; },
            async awaitRender(id: string) { return await expect(page.locator("[data-render-pending-" + id + "]")).toHaveAttribute("data-render-pending-" + id, "false") },
            focusableFirst,
            focusableLast,
            body: page.locator("body"),
            getCounter(key?: string) { return counters.get(key || "") || 0; },
            generateText(childIndex: number) { return LoremIpsum[childIndex % LoremIpsum.length] },
            resetCounter(key?: string) { counters.set(key || "", 0) },
            install: async function install<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, func: TestingConstants[K][K2]) {
                await page.evaluate(([key, Key2, func]) => {
                    // installTestingHandler is globally in scope on the testing page
                    installTestingHandler<K, K2>(key as K, Key2 as K2, new Function("...args", func) as any);
                }, [key, Key2, `return (${(func as Function).toString()})(...args)`] as const)
            },
            run,
            locator
        });
    }
})

export interface SharedFixtures {

    body: Locator;

    /** To test focus management, this focusable button comes before everything else on the page, to guarantee something that can be tabbed to. */
    focusableFirst: Locator;
    /** To test focus management, this focusable button comes after everything else on the page, to guarantee something that can be tabbed to. */
    focusableLast: Locator;

    /** Generates random text for a child of a given index. */
    generateText(childIndex: number): string;

    /** The overall <div> container housing all the test contents. Not particularly useful for much. */
    locator: Locator;

    /**
     * If a testing component calls `window.onRender(id)`, you can call `getRenderCount` to return the
     * number of times `onRender` has been called with that id.
     * 
     * @param id 
     */
    getRenderCount(id: string): number;

    awaitRender(id: string): Promise<void>;

    /**
     * The page exposes a function on `globalThis` called `increment`, which controls the value returned by this function.
     * 
     * Used to test event handlers mostly.
     */
    getCounter(key?: string): number;

    /**
     * The counter used by `increment` and `getCounter` will be changed to 0.
     * 
     * Useful because it's more clear to always be testing against 0 and 1.
     */
    resetCounter(key?: string): void;

    /**
     * When you want, for example, an event handler to run some specific code, pass the function here.
     * The testing page has handlers pre-configured for every testable event.
     * 
     * **Important**: The function you give will be stringified so it can be sent to the testing page properly. 
     * There's no way around this, so you can't use (Playwright-scoped-)global variables. Function parameters are fine.
     */
    install: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, func: TestingConstants[K][K2]) => Promise<void>;

    /**
     * Have the testing page run a function (that it installed at some point).
     * 
     * Any arguments passed must be serializable, so no `Elements` or `Symbol`s or `Document`s or anything.
     */
    run: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, ...args: TestingConstants[K][K2] extends (...args: any) => any ? Parameters<TestingConstants[K][K2]> : never) => Promise<TestingConstants[K][K2] extends (...args: any) => any ? ReturnType<TestingConstants[K][K2]> : never>;
}


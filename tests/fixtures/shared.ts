import { Locator, Page, test as base } from "@playwright/test";
import { TestingConstants } from "../stage/util.js";
import { LoremIpsum } from "../lorem.js";


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
    shared: async ({ page }, use) => {
        
        let counter = 0;
        page.exposeFunction("increment", () => counter += 1);

        use({
            getCounter() { return counter; },
            generateText(childIndex: number) { return LoremIpsum[childIndex % LoremIpsum.length] },
            resetCounter() { counter = 0; },
            install: async function install<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, func: TestingConstants[K][K2]) {
                await page.evaluate(([key, Key2, func]) => {
                    // installTestingHandler is globally in scope on the testing page
                    installTestingHandler<K, K2>(key as K, Key2 as K2, new Function("...args", func) as any);
                }, [key, Key2, `return (${(func as Function).toString()})(...args)`] as const)
            },
            run: async function run<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, ...args: TestingConstants[K][K2] extends (...args: any) => any ? Parameters<TestingConstants[K][K2]> : never): Promise<TestingConstants[K][K2] extends (...args: any) => any ? ReturnType<TestingConstants[K][K2]> : never> {
                return await page.evaluate(async ([key, Key2, ...args]: any[] | any) => {
                    // getTestingHandler is globally in scope on the testing page
                    const handler = getTestingHandler<K, K2>(key, Key2) as (TestingConstants[K][K2] & Function);
                    return await handler(...(args as [any, any]));
                }, [key, Key2, ...args] as const);
            },
            locator: page.locator(".tests-container")
        })
    }
})

interface SharedFixtures {

    generateText(childIndex: number): string;
    
    locator: Locator;

    /**
     * The page exposes a function called `increment`, which controls the value returned by this function.
     * 
     * Used to test event handlers mostly.
     */
    getCounter(): number;
    /**
     * The counter used by `increment` and `getCounter` will be changed to 0.
     * 
     * Useful because it's more clear to always be testing against 0 and 1.
     */
    resetCounter(): void;

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
     * Any arguments passed must be serializeable, so no `Elements` or `Symbol`s or `Document`s or anything.
     */
    run: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, ...args: TestingConstants[K][K2] extends (...args: any) => any ? Parameters<TestingConstants[K][K2]> : never) => Promise<TestingConstants[K][K2] extends (...args: any) => any ? ReturnType<TestingConstants[K][K2]> : never>;
}


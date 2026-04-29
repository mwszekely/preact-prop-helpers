
type SharedFixtures = import("./fixtures/base.fixture.js").SharedFixtures;
type TestingConstants = import("./stage/util.tsx").TestingConstants;


declare module globalThis {
    var installTestingHandler: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, func: TestingConstants[K][K2]) => void;
    var _TestingConstants: TestingConstants;
    var getTestingHandler: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2) => TestingConstants[K][K2];

    function getFocusedElementSelector(): string;

    // TODO: Rename run, both here and in Playwright.
    // This is here so that both sides can just call run and it just works,
    // but it should have a different name in that case.
    var run: SharedFixtures["run"];
}

declare global {
    var installTestingHandler: (typeof globalThis)["installTestingHandler"];
    var _TestingConstants: TestingConstants;
    var getTestingHandler: (typeof globalThis)["getTestingHandler"];
}
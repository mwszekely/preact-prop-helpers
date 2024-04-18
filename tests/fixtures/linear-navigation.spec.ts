import { expect } from "@playwright/test";
import { test } from "./linear-navigation.fixture.js";

test("Arrow keys move focus when the component is focused", async ({ linearNavigation, page, shared }) => {
    await linearNavigation.tests.arrowKeysMoveFocus({ linearNavigation, page, shared });
    expect(true).toBeTruthy();
});

test("Arrow keys don't move focus when the component isn't focused", async ({ linearNavigation, page, shared }) => {
    await linearNavigation.tests.arrowKeysDontMoveFocus({ linearNavigation, page, shared });
    expect(true).toBeTruthy();
});

test("Arrow key direction is configurable", async ({ linearNavigation, page, shared }) => {
    await linearNavigation.tests.arrowKeysAreConfigurable({ linearNavigation, page, shared });
    expect(true).toBeTruthy();
});

test("Home/End move focus when appropriate", async ({ linearNavigation, page, shared }) => {
    await linearNavigation.tests.homeEndMoveFocus({ linearNavigation, page, shared });
    expect(true).toBeTruthy();
});


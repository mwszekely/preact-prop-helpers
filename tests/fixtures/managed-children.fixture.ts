
import { test as base } from "./base.fixture.js";

export const test = base.extend<{managedChildren: ManagedChildrenFixtures}>({
    managedChildren: async ({ page, shared: { focusableFirst, locator } }, use) => {
        await use({ _unused: 0 });
    },
});

export interface ManagedChildrenFixtures {
    _unused: 0;
}

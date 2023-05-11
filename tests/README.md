## Structure

Files that describe tests are in this directory (`*.spec.ts`).

`stage` is for files that are used to build the testing page are in  (`stage-*.tsx`).

`fixtures` is self-explanitory -- testing [fixtures](https://playwright.dev/docs/test-fixtures).

`lorem.ts` should be renamed and includes shared constants for both that don't depend on the browser or the testing environment, like "what random text should be generated for this child (e.g. `'#5 Lorem ipsum'`)" or "what child index are we testing for `disabled` behavior on (e.g. 4)"

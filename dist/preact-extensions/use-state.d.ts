import { StateUpdater } from "../util/lib.js";
/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 *
 * If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
 * take the stack at the time the hook was called and save it to `window._setState_stack`.
 * Useful if you want to trace whose state is being updated.
 *
 * @param initialState - Same as the built-in `setState`'s
 */
export declare function useState<T>(initialState: T | (() => T)): readonly [value: T, setValue: StateUpdater<T>, getValue: () => T];
//# sourceMappingURL=use-state.d.ts.map
import { debounceRendering } from "../util/lib.js";
import { Nullable } from "../util/types.js";
/** Takes a new value or a function that updates a value, unlike `OnPassiveStateChange` which reacts to those updates */
export type PassiveStateUpdater<S, R> = [R] extends [never] ? ((value: S | ((prevState: S | undefined) => S), reason?: R) => void) : ((value: S | ((prevState: S | undefined) => S), reason: R | undefined) => void);
/** Responds to a change in a value, unlike `PassiveStateUpdater` which causes the updates */
export type OnPassiveStateChange<S, R> = [R] extends [never] ? ((value: S, prevValue: S | undefined, reason?: R) => (void | (() => void))) : ((value: S, prevValue: S | undefined, reason: R | undefined) => (void | (() => void)));
/**
 * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
 *
 * @remarks Eventually, when useEvent lands, we hopefully won't need this.
 */
export declare function useEnsureStability<T extends any[]>(parentHookName: string, ...values: T): void;
/**
 * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
 *
 * @remarks To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
 *
 * To summarize, it's like a `useState`-`useEffect` mashup:
 *
 * 1. It's like `useState`, except this version of `setState` doesn't re-render the whole component
 * 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function
 * 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering
 * 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`
 *
 * Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.
 *
 * {@include } {@link OnPassiveStateChange}
 *
 * @param onChange - The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param getInitialValue - If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param customDebounceRendering - By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
 * @returns
 */
export declare function usePassiveState<T, R>(onChange: Nullable<OnPassiveStateChange<T, R>>, getInitialValue?: () => T, customDebounceRendering?: typeof debounceRendering): readonly [getStateStable: () => T, setStateStable: PassiveStateUpdater<T, R>];
export declare function returnTrue(): boolean;
export declare function returnFalse(): boolean;
export declare function returnNull(): null;
export declare function returnUndefined(): undefined;
export declare function returnZero(): number;
/**
 * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
 */
export declare function runImmediately(f: () => void): void;
//# sourceMappingURL=use-passive-state.d.ts.map
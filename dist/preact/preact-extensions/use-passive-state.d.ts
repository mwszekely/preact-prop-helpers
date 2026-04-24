import { debounceRendering } from "../util/lib.js";
import { Nullable } from "../util/types.js";
/** Takes a new value or a function that updates a value, unlike `OnPassiveStateChange` which reacts to those updates */
export type PassiveStateUpdater<S, R> = ((value: S | ((prevState: S | undefined) => S), reason?: R | undefined) => void);
/** Responds to a change in a value, unlike `PassiveStateUpdater` which causes the updates */
export type OnPassiveStateChange<S, R> = ((value: S, prevValue: S | undefined, reason?: R | undefined) => (void | (() => void)));
/**
 * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
 *
 * @remarks Eventually, when useEvent lands, we hopefully won't need this.
 */
export declare function useEnsureStability<T extends any[]>(parentHookName: string, ...values: T): void;
export interface UsePassiveStateOptions {
    /**
     * Controls when value initialization and the first effect callback runs.
     *
     * When this hook mounts, the value returned by `getValue` is uninitialized. This parameter
     * controls when that initialization happens.
     *
     * "initialization" refers to using the `getInitialValue` you supplied to populate `getValue`'s returned value.
     *
     * * `delay` (default): The value is initialized the first time it is referenced or changed, and the first callback is called then. Ideal for most use-cases.
     * * `on-mount`: The value is initialized during `useLayoutEffect` and the first callback is called then. Less common but useful when it's important that the change handler would otherwise be called too late the first time.
     * * `off`: The value is initialized the first time it is referenced or changed. The first callback is called the first time it changes from a non-initialized state. Largely a performance optimization and rather niche.
     *
     * Note that there is no combination of `off` and `on-mount` (one that is initialized on mount but whose callback is not fired) because the only purpose `on-mount` has is firing the change handler representing the initial value as soon as possible.
     */
    initialization: "on-mount" | "delay" | "off";
    /**
     * By default, state changes via usePassiveState wait a microtick
     * before resolving everything that happened all at once.
     *
     * If you would prefer to wait longer (or run immediately instead),
     * pass a different function here.
     *
     * @see runImmediately
     *
     * @stable
     */
    debounceRendering: typeof debounceRendering;
}
/**
 * Similar to `useState`, but for values that aren't "render-important" &ndash;
 * updates don't cause a re-render and so the value shouldn't be used during
 * render (though it certainly can, at least by re-rendering again).
 *
 * @remarks To compensate for this, you should pass a `useEffect`-esque callback
 * that is run whenever the value changes.  Just like `useEffect`, this callback
 * can return a cleanup function that's run before the value changes.  If you
 * would like to re-render when the value changes (or, say, when the value meets
 * some criteria), this is where you'll want to put in a call to a `setState` function.
 *
 * To summarize, it's like a `useState`-`useEffect` mashup:
 *
 * * It's like `useState`, except:
 *     * Calling `setState` doesn't re-render the whole component
 *     * You can run a function when the value changes that optionally returns a cleanup function
 * * It's like `useEffect`, except:
 *     * You trigger the effect function "remotely" instead of it running after rendering
 *     * The single "dependency" is based on your calls to `setState`
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
export declare function usePassiveState<T, R>(onChange: Nullable<OnPassiveStateChange<T, R>>, getInitialValue?: () => T, { debounceRendering: customDebounceRendering, initialization }?: Partial<UsePassiveStateOptions>): readonly [getStateStable: () => T, setStateStable: PassiveStateUpdater<T, R>];
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
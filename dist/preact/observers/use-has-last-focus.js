import { $getElement, $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback, useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { $onLastActiveElementChange, $activeElementParameters, $activeElementReturn, useActiveElement } from "./use-active-element.js";
export const $hasLastFocusParameters = Symbol();
export const $hasLastFocusReturn = Symbol();
export const $onLastFocusedChanged = Symbol();
export const $onLastFocusedInnerChanged = Symbol();
export const $getLastFocused = Symbol();
export const $getLastFocusedInner = Symbol();
/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export const useHasLastFocus = monitored(function useHasLastFocus(args) {
    const { [$refElementReturn]: { [$getElement]: getElement }, [$activeElementParameters]: { [$onLastActiveElementChange]: onLastActiveElementChange, ...activeElementParameters }, [$hasLastFocusParameters]: { [$onLastFocusedChanged]: onLastFocusedChanged, [$onLastFocusedInnerChanged]: onLastFocusedInnerChanged, ...void1 } } = args;
    assertEmptyObject(void1);
    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, runImmediately);
    const { [$activeElementReturn]: activeElementReturn } = useActiveElement({
        [$activeElementParameters]: {
            [$onLastActiveElementChange]: useCallback((lastActiveElement, prevLastActiveElement, e) => {
                const selfElement = getElement();
                const focused = (selfElement != null && (selfElement == lastActiveElement));
                const focusedInner = (!!selfElement?.contains(lastActiveElement));
                setLastFocused(focused, e);
                setLastFocusedInner(focusedInner, e);
                onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement, e);
            }, []),
            ...activeElementParameters
        },
    });
    useEffect(() => {
        return () => {
            setLastFocused(false, undefined);
            setLastFocusedInner(false, undefined);
        };
    }, []);
    return {
        [$activeElementReturn]: activeElementReturn,
        [$hasLastFocusReturn]: {
            [$getLastFocused]: getLastFocused,
            [$getLastFocusedInner]: getLastFocusedInner,
        }
    };
});
//# sourceMappingURL=use-has-last-focus.js.map
import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback, useEffect } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
import { useActiveElement } from "./use-active-element.js";
/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export function useHasLastFocus(args) {
    return useMonitoring(function useHasLastFocus() {
        const { refElementReturn: { getElement }, activeElementParameters: { onLastActiveElementChange, ...activeElementParameters }, hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ...void1 } } = args;
        assertEmptyObject(void1);
        useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
        const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const { activeElementReturn } = useActiveElement({
            activeElementParameters: {
                onLastActiveElementChange: useCallback((lastActiveElement, prevLastActiveElement, e) => {
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
            activeElementReturn,
            hasLastFocusReturn: {
                getLastFocused,
                getLastFocusedInner,
            }
        };
    });
}
//# sourceMappingURL=use-has-last-focus.js.map
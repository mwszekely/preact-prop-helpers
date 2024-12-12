import { returnFalse, returnZero, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { useMonitoring } from "../util/use-call-count.js";
/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 *
 * @hasChild {@link useChildrenHaveFocusChild}
 *
 * @compositeParams
 */
export function useChildrenHaveFocus(args) {
    return useMonitoring(function useChildrenHaveFocus() {
        const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;
        const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e) => {
            console.assert(anyFocused >= 0 && anyFocused <= 1);
            setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
        }), returnZero, { debounceRendering: setTimeout, skipMountInitialization: true }); // setTimeout is used for the debounce to be somewhat generous with timing, and to guard against the default being able to be runImmediately...
        return {
            childrenHaveFocusReturn: { getAnyFocused },
            context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) }),
        };
    });
}
/**
 * @compositeParams
 */
export function useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
    return useMonitoring(function useChildrenHaveFocusChild() {
        return {
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                    if (focused) {
                        setFocusCount(p => (p ?? 0) + 1, e);
                    }
                    else if (!focused && prev) {
                        setFocusCount(p => (p ?? 0) - 1, e);
                    }
                }),
            }
        };
    });
}
//# sourceMappingURL=use-children-have-focus.js.map
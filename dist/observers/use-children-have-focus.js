import { returnFalse, returnZero, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { monitored } from "../util/use-call-count.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged } from "./use-has-current-focus.js";
const P1 = `PropNames.ChildrenHaveFocusParameters`;
const R1 = `PropNames.ChildrenHaveFocusReturn`;
export const PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange = `${P1}.onCompositeFocusChange`;
export const PropNames_ChildrenHaveFocusReturn_getAnyFocused = `${R1}.getAnyFocused`;
/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 *
 * @compositeParams
 *
 * @hasChild {@link useChildrenHaveFocusChild}
 */
export const useChildrenHaveFocus = monitored(function useChildrenHaveFocus({ [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange }) {
    const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);
        setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
    }), returnZero, setTimeout); // setTimeout is used for the debounce to be somewhat generous with timing, and to guard against the default being runImmediately...
    return {
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
        context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) }),
    };
});
/**
 * @compositeParams
 */
export const useChildrenHaveFocusChild = monitored(function useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
    return {
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((focused, prev, e) => {
            if (focused) {
                setFocusCount(p => (p ?? 0) + 1, e);
            }
            else if (!focused && prev) {
                setFocusCount(p => (p ?? 0) - 1, e);
            }
        })
    };
});
//# sourceMappingURL=use-children-have-focus.js.map